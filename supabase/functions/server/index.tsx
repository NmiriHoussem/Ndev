import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Initialize Supabase client for storage
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
);

// Create storage buckets on startup
const BUCKET_NAME = 'make-a2e14eff-projects';
const FAVICON_BUCKET_NAME = 'make-a2e14eff-favicons';
const OG_IMAGE_BUCKET_NAME = 'make-a2e14eff-og-images';

async function initializeStorage() {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    
    // Create projects bucket
    const projectBucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
    if (!projectBucketExists) {
      const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: false,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
      });
      
      if (error && error.statusCode !== '409') {
        // Only log error if it's not "already exists" (409)
        console.error('Error creating storage bucket:', error);
      } else if (!error) {
        console.log(`Storage bucket "${BUCKET_NAME}" created successfully`);
      }
    }
    
    // Create public favicons bucket
    const faviconBucketExists = buckets?.some(bucket => bucket.name === FAVICON_BUCKET_NAME);
    if (!faviconBucketExists) {
      const { error } = await supabase.storage.createBucket(FAVICON_BUCKET_NAME, {
        public: true, // Public access for favicons
        fileSizeLimit: 2097152, // 2MB
        allowedMimeTypes: [
          'image/x-icon',
          'image/vnd.microsoft.icon',
          'image/png',
          'image/svg+xml',
          'application/json',
          'application/manifest+json'
        ]
      });
      
      if (error && error.statusCode !== '409') {
        // Only log error if it's not "already exists" (409)
        console.error('Error creating favicon bucket:', error);
      } else if (!error) {
        console.log(`Favicon bucket "${FAVICON_BUCKET_NAME}" created successfully`);
      }
    }

    // Create public OG images bucket
    const ogImageBucketExists = buckets?.some(bucket => bucket.name === OG_IMAGE_BUCKET_NAME);
    if (!ogImageBucketExists) {
      const { error } = await supabase.storage.createBucket(OG_IMAGE_BUCKET_NAME, {
        public: true, // Public access for OG images
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
      });
      
      if (error && error.statusCode !== '409') {
        // Only log error if it's not "already exists" (409)
        console.error('Error creating OG image bucket:', error);
      } else if (!error) {
        console.log(`OG image bucket "${OG_IMAGE_BUCKET_NAME}" created successfully`);
      }
    }
  } catch (error) {
    console.error('Error initializing storage:', error);
  }
}

// Initialize storage
initializeStorage();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a2e14eff/health", (c) => {
  return c.json({ status: "ok" });
});

// Projects CRUD endpoints
// Get all projects
app.get("/make-server-a2e14eff/projects", async (c) => {
  try {
    const projects = await kv.getByPrefix("project:");
    return c.json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get single project
app.get("/make-server-a2e14eff/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const project = await kv.get(`project:${id}`);
    if (!project) {
      return c.json({ success: false, error: "Project not found" }, 404);
    }
    return c.json({ success: true, project });
  } catch (error) {
    console.error("Error fetching project:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create project
app.post("/make-server-a2e14eff/projects", async (c) => {
  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const project = {
      id,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await kv.set(`project:${id}`, project);
    return c.json({ success: true, project });
  } catch (error) {
    console.error("Error creating project:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update project
app.put("/make-server-a2e14eff/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const existing = await kv.get(`project:${id}`);
    if (!existing) {
      return c.json({ success: false, error: "Project not found" }, 404);
    }
    const project = {
      ...existing,
      ...body,
      id, // Preserve ID
      createdAt: existing.createdAt, // Preserve creation date
      updatedAt: new Date().toISOString(),
    };
    await kv.set(`project:${id}`, project);
    return c.json({ success: true, project });
  } catch (error) {
    console.error("Error updating project:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete project
app.delete("/make-server-a2e14eff/projects/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`project:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting project:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Seed default projects endpoint
app.post("/make-server-a2e14eff/projects/seed", async (c) => {
  try {
    // Check if projects already exist
    const existingProjects = await kv.getByPrefix("project:");
    if (existingProjects && existingProjects.length > 0) {
      return c.json({ 
        success: false, 
        error: "Projects already exist. Delete existing projects first if you want to reseed." 
      }, 400);
    }

    const defaultProjects = [
      {
        title: "FinTech Mobile App",
        category: "SaaS Product",
        description: "A comprehensive fintech solution with real-time analytics, secure payment processing, and intuitive user experience for managing personal finances.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        tags: ["React Native", "Node.js", "PostgreSQL", "Payment Gateway"],
        gradient: "from-blue-600 via-cyan-500 to-teal-500",
        metrics: {
          users: "50K+",
          rating: "4.8",
          growth: "+125%"
        },
        featured: true
      },
      {
        title: "Interactive Learning Platform",
        category: "E-Learning",
        description: "Gamified educational platform with interactive courses, progress tracking, and AI-powered personalized learning paths for students and professionals.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        tags: ["React", "Three.js", "AI/ML", "Gamification"],
        gradient: "from-purple-600 via-indigo-500 to-blue-500",
        metrics: {
          users: "30K+",
          rating: "4.9",
          growth: "+200%"
        },
        featured: true
      },
      {
        title: "E-Commerce Revolution",
        category: "Web Development",
        description: "Next-generation e-commerce platform with advanced product visualization, AR try-on features, and seamless checkout experience.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        tags: ["Next.js", "Stripe", "WebGL", "AR"],
        gradient: "from-orange-500 via-red-500 to-pink-500",
        metrics: {
          users: "100K+",
          rating: "4.7",
          growth: "+180%"
        },
        featured: false
      },
      {
        title: "Corporate Brand Identity",
        category: "Branding & Design",
        description: "Complete brand overhaul including logo design, brand guidelines, marketing collateral, and digital presence for a tech startup.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        tags: ["Branding", "UI/UX", "Figma", "Identity Design"],
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        metrics: {
          users: "10K+",
          rating: "5.0",
          growth: "+300%"
        },
        featured: false
      },
      {
        title: "Healthcare Management System",
        category: "Product Management",
        description: "Comprehensive healthcare platform connecting patients, doctors, and hospitals with appointment scheduling, telemedicine, and medical records management.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        tags: ["Healthcare", "Vue.js", "HIPAA Compliant", "Real-time"],
        gradient: "from-blue-500 via-purple-500 to-pink-500",
        metrics: {
          users: "25K+",
          rating: "4.9",
          growth: "+150%"
        },
        featured: true
      },
      {
        title: "Multiplayer Strategy Game",
        category: "Game Development",
        description: "Engaging real-time strategy game with stunning graphics, competitive multiplayer modes, and cross-platform support.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
        tags: ["Unity", "Multiplayer", "WebGL", "Mobile"],
        gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
        metrics: {
          users: "75K+",
          rating: "4.6",
          growth: "+220%"
        },
        featured: false
      }
    ];

    // Create all projects
    const createdProjects = [];
    for (const projectData of defaultProjects) {
      const id = crypto.randomUUID();
      const project = {
        id,
        ...projectData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await kv.set(`project:${id}`, project);
      createdProjects.push(project);
    }

    console.log(`Successfully seeded ${createdProjects.length} default projects`);
    return c.json({ 
      success: true, 
      message: `Successfully created ${createdProjects.length} default projects`,
      projects: createdProjects 
    });
  } catch (error) {
    console.error("Error seeding projects:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Image upload endpoint for projects
app.post("/make-server-a2e14eff/upload-image", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return c.json({ success: false, error: 'No file provided' }, 400);
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return c.json({ 
        success: false, 
        error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' 
      }, 400);
    }

    // Validate file size (5MB max)
    if (file.size > 5242880) {
      return c.json({ 
        success: false, 
        error: 'File too large. Maximum size is 5MB.' 
      }, 400);
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `projects/${fileName}`;

    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = new Uint8Array(arrayBuffer);

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, fileBuffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Error uploading file to storage:', uploadError);
      return c.json({ 
        success: false, 
        error: `Upload failed: ${uploadError.message}` 
      }, 500);
    }

    // Get signed URL (valid for 10 years)
    const { data: signedUrlData, error: signedUrlError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(filePath, 315360000); // 10 years in seconds

    if (signedUrlError) {
      console.error('Error creating signed URL:', signedUrlError);
      return c.json({ 
        success: false, 
        error: `Failed to create signed URL: ${signedUrlError.message}` 
      }, 500);
    }

    console.log(`Successfully uploaded image: ${filePath}`);
    return c.json({ 
      success: true, 
      url: signedUrlData.signedUrl,
      path: filePath 
    });
  } catch (error) {
    console.error('Error in image upload endpoint:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Clients CRUD endpoints
// Get all clients
app.get("/make-server-a2e14eff/clients", async (c) => {
  try {
    const clients = await kv.getByPrefix("client:");
    return c.json({ success: true, clients });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get single client
app.get("/make-server-a2e14eff/clients/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const client = await kv.get(`client:${id}`);
    if (!client) {
      return c.json({ success: false, error: "Client not found" }, 404);
    }
    return c.json({ success: true, client });
  } catch (error) {
    console.error("Error fetching client:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create client
app.post("/make-server-a2e14eff/clients", async (c) => {
  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const client = {
      id,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await kv.set(`client:${id}`, client);
    return c.json({ success: true, client });
  } catch (error) {
    console.error("Error creating client:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update client
app.put("/make-server-a2e14eff/clients/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();
    const existing = await kv.get(`client:${id}`);
    if (!existing) {
      return c.json({ success: false, error: "Client not found" }, 404);
    }
    const client = {
      ...existing,
      ...body,
      id, // Preserve ID
      createdAt: existing.createdAt, // Preserve creation date
      updatedAt: new Date().toISOString(),
    };
    await kv.set(`client:${id}`, client);
    return c.json({ success: true, client });
  } catch (error) {
    console.error("Error updating client:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete client
app.delete("/make-server-a2e14eff/clients/:id", async (c) => {
  try {
    const id = c.req.param("id");
    await kv.del(`client:${id}`);
    return c.json({ success: true });
  } catch (error) {
    console.error("Error deleting client:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Seed default clients endpoint
app.post("/make-server-a2e14eff/clients/seed", async (c) => {
  try {
    // Check if clients already exist
    const existingClients = await kv.getByPrefix("client:");
    if (existingClients && existingClients.length > 0) {
      return c.json({ 
        success: false, 
        error: "Clients already exist. Delete existing clients first if you want to reseed." 
      }, 400);
    }

    const defaultClients = [
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
      },
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
      },
      {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
      },
      {
        name: "Meta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
      },
      {
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      },
      {
        name: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      }
    ];

    // Create all clients
    const createdClients = [];
    for (const clientData of defaultClients) {
      const id = crypto.randomUUID();
      const client = {
        id,
        ...clientData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await kv.set(`client:${id}`, client);
      createdClients.push(client);
    }

    console.log(`Successfully seeded ${createdClients.length} default clients`);
    return c.json({ 
      success: true, 
      message: `Successfully created ${createdClients.length} default clients`,
      clients: createdClients 
    });
  } catch (error) {
    console.error("Error seeding clients:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// KV Store endpoints for general settings (logos, etc.)
// Get a value from KV store
app.get("/make-server-a2e14eff/kv/get", async (c) => {
  try {
    const key = c.req.query('key');
    if (!key) {
      return c.json({ success: false, error: 'Key is required' }, 400);
    }
    
    const value = await kv.get(key);
    return c.json(value);
  } catch (error) {
    console.error('Error getting KV value:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Set a value in KV store
app.post("/make-server-a2e14eff/kv/set", async (c) => {
  try {
    const body = await c.req.json();
    const { key, value } = body;
    
    if (!key) {
      return c.json({ success: false, error: 'Key is required' }, 400);
    }
    
    await kv.set(key, value);
    return c.json({ success: true });
  } catch (error) {
    console.error('Error setting KV value:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete a value from KV store
app.post("/make-server-a2e14eff/kv/delete", async (c) => {
  try {
    const body = await c.req.json();
    const { key } = body;
    
    if (!key) {
      return c.json({ success: false, error: 'Key is required' }, 400);
    }
    
    await kv.del(key);
    return c.json({ success: true });
  } catch (error) {
    console.error('Error deleting KV value:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Social Media CRUD endpoints
// Get all social media links
app.get("/make-server-a2e14eff/social-media", async (c) => {
  try {
    const socialMedia = await kv.getByPrefix("socialmedia:");
    // Sort by order
    const sorted = socialMedia.sort((a: any, b: any) => a.order - b.order);
    return c.json(sorted);
  } catch (error) {
    console.error("Error fetching social media:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Save all social media links
app.post("/make-server-a2e14eff/social-media", async (c) => {
  try {
    const body = await c.req.json();
    const { socialMedia } = body;
    
    if (!Array.isArray(socialMedia)) {
      return c.json({ success: false, error: "socialMedia must be an array" }, 400);
    }
    
    // Delete all existing social media links
    const existing = await kv.getByPrefix("socialmedia:");
    for (const item of existing) {
      if (item.id) {
        await kv.del(`socialmedia:${item.id}`);
      }
    }
    
    // Save new social media links
    for (const item of socialMedia) {
      const socialMediaItem = {
        ...item,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      await kv.set(`socialmedia:${item.id}`, socialMediaItem);
    }
    
    return c.json({ success: true });
  } catch (error) {
    console.error("Error saving social media:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Contact form endpoint with spam protection
app.post("/make-server-a2e14eff/contact", async (c) => {
  try {
    const body = await c.req.json();
    let { name, email, company, message } = body;

    // Trim all fields
    name = name?.trim();
    email = email?.trim();
    company = company?.trim();
    message = message?.trim();

    // Validation
    if (!name || !email || !message) {
      return c.json({ 
        success: false, 
        error: 'Name, email, and message are required' 
      }, 400);
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ 
        success: false, 
        error: 'Invalid email address' 
      }, 400);
    }

    // Spam protection: Rate limiting using KV store
    const rateLimitKey = `contact_rate_limit:${email}`;
    const lastSubmission = await kv.get(rateLimitKey);
    
    if (lastSubmission) {
      const lastTime = new Date(lastSubmission).getTime();
      const now = new Date().getTime();
      const timeDiff = now - lastTime;
      
      // Allow only one submission per 5 minutes
      if (timeDiff < 5 * 60 * 1000) {
        const remainingTime = Math.ceil((5 * 60 * 1000 - timeDiff) / 1000 / 60);
        return c.json({ 
          success: false, 
          error: `Please wait ${remainingTime} minute(s) before submitting again` 
        }, 429);
      }
    }

    // Basic spam detection
    const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'congratulations', 'click here', 'buy now'];
    const messageText = `${name} ${email} ${company || ''} ${message}`.toLowerCase();
    const containsSpam = spamKeywords.some(keyword => messageText.includes(keyword));
    
    if (containsSpam) {
      console.log(`Spam detected from ${email}`);
      return c.json({ 
        success: false, 
        error: 'Message flagged as spam' 
      }, 400);
    }

    // Check for suspicious patterns - reduced minimum to 5 characters
    if (message.length < 5) {
      return c.json({ 
        success: false, 
        error: 'Message must be at least 5 characters' 
      }, 400);
    }

    if (message.length > 5000) {
      return c.json({ 
        success: false, 
        error: 'Message is too long (maximum 5000 characters)' 
      }, 400);
    }

    // Send email using Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      console.error('Available env vars:', Object.keys(Deno.env.toObject()));
      return c.json({ 
        success: false, 
        error: 'Email service not configured. Please contact the administrator.' 
      }, 500);
    }

    console.log('Resend API Key found, attempting to send email...');

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'NdevDigital Contact Form <onboarding@resend.dev>',
        to: ['houssem.addin@gmail.com'],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #8B5CF6; border-radius: 4px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This email was sent from the NdevDigital contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Tunis' })} (Tunisia Time)</p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Error sending email via Resend:', errorData);
      return c.json({ 
        success: false, 
        error: 'Failed to send email. Please try again later or contact us directly.' 
      }, 500);
    }

    // Update rate limit
    await kv.set(rateLimitKey, new Date().toISOString());

    // Store the submission in KV for record keeping (optional)
    const submissionId = crypto.randomUUID();
    await kv.set(`contact_submission:${submissionId}`, {
      id: submissionId,
      name,
      email,
      company,
      message,
      submittedAt: new Date().toISOString(),
      ipAddress: c.req.header('x-forwarded-for') || 'unknown',
    });

    console.log(`Contact form submission from ${name} (${email}) sent successfully`);
    
    return c.json({ 
      success: true, 
      message: 'Your message has been sent successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return c.json({ 
      success: false, 
      error: 'An unexpected error occurred. Please try again later.' 
    }, 500);
  }
});

// Favicon Management endpoints
// Get favicon status (which files are uploaded)
app.get("/make-server-a2e14eff/api/favicons/status", async (c) => {
  try {
    const { data: files, error } = await supabase.storage
      .from(FAVICON_BUCKET_NAME)
      .list('', {
        limit: 100,
        offset: 0,
      });

    if (error) {
      console.error('Error listing favicon files:', error);
      return c.json({ success: false, error: error.message }, 500);
    }

    const fileMap: Record<string, boolean> = {};
    const urlMap: Record<string, string> = {};
    
    for (const file of files || []) {
      fileMap[file.name] = true;
      // Get public URL
      const { data } = supabase.storage
        .from(FAVICON_BUCKET_NAME)
        .getPublicUrl(file.name);
      urlMap[file.name] = data.publicUrl;
    }

    return c.json({ 
      success: true, 
      files: fileMap,
      urls: urlMap
    });
  } catch (error) {
    console.error('Error in favicon status endpoint:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Upload favicon file
app.post("/make-server-a2e14eff/api/favicons/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    const fileName = formData.get('fileName') as string;
    
    if (!file || !fileName) {
      return c.json({ success: false, error: 'File and fileName are required' }, 400);
    }

    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = new Uint8Array(arrayBuffer);

    // Determine content type
    let contentType = file.type;
    if (fileName.endsWith('.ico')) {
      contentType = 'image/x-icon';
    } else if (fileName.endsWith('.svg')) {
      contentType = 'image/svg+xml';
    } else if (fileName.endsWith('.webmanifest') || fileName.endsWith('.json')) {
      contentType = 'application/manifest+json';
    } else if (fileName.endsWith('.png')) {
      contentType = 'image/png';
    }

    // Upload to Supabase Storage (public bucket)
    const { error: uploadError } = await supabase.storage
      .from(FAVICON_BUCKET_NAME)
      .upload(fileName, fileBuffer, {
        contentType: contentType,
        cacheControl: '31536000', // 1 year cache
        upsert: true // Allow overwriting
      });

    if (uploadError) {
      console.error('Error uploading favicon:', uploadError);
      return c.json({ 
        success: false, 
        error: `Upload failed: ${uploadError.message}` 
      }, 500);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(FAVICON_BUCKET_NAME)
      .getPublicUrl(fileName);

    console.log(`Successfully uploaded favicon: ${fileName}`);
    return c.json({ 
      success: true, 
      url: urlData.publicUrl,
      fileName: fileName
    });
  } catch (error) {
    console.error('Error in favicon upload endpoint:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get all favicon URLs (for dynamic injection)
app.get("/make-server-a2e14eff/api/favicons", async (c) => {
  try {
    console.log('[Favicons API] Listing files from bucket:', FAVICON_BUCKET_NAME);
    
    const { data: files, error } = await supabase.storage
      .from(FAVICON_BUCKET_NAME)
      .list('', {
        limit: 100,
        offset: 0,
      });

    if (error) {
      console.error('[Favicons API] Error listing favicons:', error);
      return c.json({ success: false, error: error.message }, 500);
    }

    console.log('[Favicons API] Found files:', files);
    const favicons: Record<string, string> = {};
    
    for (const file of files || []) {
      // Get public URL
      const { data } = supabase.storage
        .from(FAVICON_BUCKET_NAME)
        .getPublicUrl(file.name);
      favicons[file.name] = data.publicUrl;
      console.log('[Favicons API] Added favicon:', file.name, '→', data.publicUrl);
    }

    console.log('[Favicons API] Returning', Object.keys(favicons).length, 'favicons');
    return c.json({ success: true, favicons });
  } catch (error) {
    console.error('[Favicons API] Error in favicons endpoint:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Serve individual favicon files (proxy endpoint)
app.get("/make-server-a2e14eff/favicon/:filename", async (c) => {
  try {
    const filename = c.req.param('filename');
    
    // Download the file from Supabase Storage
    const { data, error } = await supabase.storage
      .from(FAVICON_BUCKET_NAME)
      .download(filename);

    if (error || !data) {
      console.error(`Error downloading favicon ${filename}:`, error);
      return c.notFound();
    }

    // Determine content type
    let contentType = 'application/octet-stream';
    if (filename.endsWith('.ico')) {
      contentType = 'image/x-icon';
    } else if (filename.endsWith('.svg')) {
      contentType = 'image/svg+xml';
    } else if (filename.endsWith('.webmanifest') || filename.endsWith('.json')) {
      contentType = 'application/manifest+json';
    } else if (filename.endsWith('.png')) {
      contentType = 'image/png';
    }

    // Convert Blob to ArrayBuffer
    const arrayBuffer = await data.arrayBuffer();
    
    // Return the file with proper headers
    return new Response(arrayBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache for 1 year
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error serving favicon:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// OG Image Management endpoints
// Upload OG Image
app.post("/make-server-a2e14eff/upload-og-image", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return c.json({ success: false, error: 'No file provided' }, 400);
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return c.json({ 
        success: false, 
        error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.' 
      }, 400);
    }

    // Validate file size (5MB max)
    if (file.size > 5242880) {
      return c.json({ 
        success: false, 
        error: 'File too large. Maximum size is 5MB.' 
      }, 400);
    }

    // Use fixed filename to always overwrite
    const fileName = 'og-image.png';

    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = new Uint8Array(arrayBuffer);

    // Upload to Supabase Storage (public bucket)
    const { error: uploadError } = await supabase.storage
      .from(OG_IMAGE_BUCKET_NAME)
      .upload(fileName, fileBuffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: true // Overwrite existing
      });

    if (uploadError) {
      console.error('Error uploading OG image:', uploadError);
      return c.json({ 
        success: false, 
        error: `Upload failed: ${uploadError.message}` 
      }, 500);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(OG_IMAGE_BUCKET_NAME)
      .getPublicUrl(fileName);

    // Store URL in KV for easy access
    await kv.set('og-image-url', urlData.publicUrl);
    await kv.set('og-image-use-generated', false);

    console.log(`Successfully uploaded OG image: ${fileName}`);
    return c.json({ 
      success: true, 
      url: urlData.publicUrl
    });
  } catch (error) {
    console.error('Error in OG image upload endpoint:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get OG image configuration
app.get("/make-server-a2e14eff/og-image-config", async (c) => {
  try {
    const useGenerated = await kv.get('og-image-use-generated');
    const customUrl = await kv.get('og-image-url');
    
    return c.json({ 
      success: true,
      useGenerated: useGenerated === true,
      customUrl: customUrl || null
    });
  } catch (error) {
    console.error('Error getting OG image config:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Set OG image configuration
app.post("/make-server-a2e14eff/set-og-image-config", async (c) => {
  try {
    const body = await c.req.json();
    const { useGenerated, customUrl } = body;
    
    await kv.set('og-image-use-generated', useGenerated === true);
    
    // If a custom URL is provided, store it
    if (customUrl) {
      await kv.set('og-image-url', customUrl);
      console.log('[OG Config] Set custom URL:', customUrl);
    }
    
    return c.json({ success: true });
  } catch (error) {
    console.error('Error setting OG image config:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Proxy endpoint for OG image - ensures proper headers for social media
app.get("/make-server-a2e14eff/og-image-proxy", async (c) => {
  try {
    console.log('[OG Image Proxy] Checking for custom image...');
    
    // Check if using custom image
    const useGenerated = await kv.get('og-image-use-generated');
    const customUrl = await kv.get('og-image-url');
    
    console.log('[OG Image Proxy] useGenerated:', useGenerated);
    console.log('[OG Image Proxy] customUrl:', customUrl);
    
    if (!useGenerated && customUrl) {
      console.log('[OG Image Proxy] Fetching custom image from:', customUrl);
      
      // Fetch the image from Supabase Storage
      const response = await fetch(customUrl);
      
      if (!response.ok) {
        console.error('[OG Image Proxy] Failed to fetch custom image:', response.status, response.statusText);
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      
      // Get the image data
      const imageData = await response.arrayBuffer();
      console.log('[OG Image Proxy] Successfully fetched custom image, size:', imageData.byteLength, 'bytes');
      
      // Return with proper headers (no range requests, full content)
      return new Response(imageData, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Content-Length': imageData.byteLength.toString(),
          'Cache-Control': 'public, max-age=3600',
          'Access-Control-Allow-Origin': '*',
          'Accept-Ranges': 'none', // Disable range requests
        },
      });
    }
    
    // Return generated SVG image (don't redirect, return directly)
    console.log('[OG Image Proxy] Returning generated SVG image');
    
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A0A0F;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1A1A2E;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F0F1A;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#5865F2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Decorative circles with glow -->
  <circle cx="200" cy="150" r="100" fill="#5865F2" opacity="0.1" filter="url(#glow)"/>
  <circle cx="1000" cy="480" r="120" fill="#8B5CF6" opacity="0.1" filter="url(#glow)"/>
  
  <!-- Top accent bar -->
  <rect width="1200" height="8" fill="url(#accent)"/>
  
  <!-- Main content -->
  <text x="600" y="220" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">
    NdevDigital
  </text>
  
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="36" fill="#B4B4B4" text-anchor="middle">
    Building Digital Excellence
  </text>
  
  <!-- Service pills -->
  <g transform="translate(600, 370)">
    <!-- UI/UX Design -->
    <rect x="-280" y="0" width="140" height="40" rx="20" fill="#5865F2" opacity="0.2"/>
    <text x="-210" y="27" font-family="Arial, sans-serif" font-size="16" fill="#5865F2" text-anchor="middle">UI/UX Design</text>
    
    <!-- Web Dev -->
    <rect x="-120" y="0" width="120" height="40" rx="20" fill="#8B5CF6" opacity="0.2"/>
    <text x="-60" y="27" font-family="Arial, sans-serif" font-size="16" fill="#8B5CF6" text-anchor="middle">Web Dev</text>
    
    <!-- SaaS -->
    <rect x="20" y="0" width="80" height="40" rx="20" fill="#5865F2" opacity="0.2"/>
    <text x="60" y="27" font-family="Arial, sans-serif" font-size="16" fill="#5865F2" text-anchor="middle">SaaS</text>
    
    <!-- E-Learning -->
    <rect x="120" y="0" width="120" height="40" rx="20" fill="#8B5CF6" opacity="0.2"/>
    <text x="180" y="27" font-family="Arial, sans-serif" font-size="16" fill="#8B5CF6" text-anchor="middle">E-Learning</text>
  </g>
  
  <!-- Bottom info -->
  <text x="600" y="550" font-family="Arial, sans-serif" font-size="24" fill="#808080" text-anchor="middle">
    ndevdigital@sent.com • Tunis, Tunisia
  </text>
</svg>`;

    return new Response(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Content-Length': svg.length.toString(),
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*',
        'Accept-Ranges': 'none',
      },
    });
  } catch (error) {
    console.error('[OG Image Proxy] Error:', error);
    
    // Return a simple fallback SVG on error
    const fallbackSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0A0A0F"/>
  <text x="600" y="315" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="white" text-anchor="middle">
    NdevDigital
  </text>
</svg>`;
    
    return new Response(fallbackSvg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=60',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
});

// Dynamic OG Image Generator
app.get("/make-server-a2e14eff/og-image", async (c) => {
  try {
    // Generate a beautiful OG image as SVG
    // SVG works for most social platforms and is lightweight
    
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A0A0F;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1A1A2E;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0F0F1A;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#5865F2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  
  <!-- Decorative circles with glow -->
  <circle cx="200" cy="150" r="100" fill="#5865F2" opacity="0.1" filter="url(#glow)"/>
  <circle cx="1000" cy="480" r="120" fill="#8B5CF6" opacity="0.1" filter="url(#glow)"/>
  
  <!-- Top accent bar -->
  <rect width="1200" height="8" fill="url(#accent)"/>
  
  <!-- Main content -->
  <text x="600" y="220" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">
    NdevDigital
  </text>
  
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="36" fill="#B4B4B4" text-anchor="middle">
    Building Digital Excellence
  </text>
  
  <!-- Service pills -->
  <g transform="translate(600, 370)">
    <!-- UI/UX Design -->
    <rect x="-280" y="0" width="140" height="40" rx="20" fill="#5865F2" opacity="0.2"/>
    <text x="-210" y="27" font-family="Arial, sans-serif" font-size="16" fill="#5865F2" text-anchor="middle">UI/UX Design</text>
    
    <!-- Web Dev -->
    <rect x="-120" y="0" width="120" height="40" rx="20" fill="#8B5CF6" opacity="0.2"/>
    <text x="-60" y="27" font-family="Arial, sans-serif" font-size="16" fill="#8B5CF6" text-anchor="middle">Web Dev</text>
    
    <!-- SaaS -->
    <rect x="20" y="0" width="80" height="40" rx="20" fill="#5865F2" opacity="0.2"/>
    <text x="60" y="27" font-family="Arial, sans-serif" font-size="16" fill="#5865F2" text-anchor="middle">SaaS</text>
    
    <!-- E-Learning -->
    <rect x="120" y="0" width="120" height="40" rx="20" fill="#8B5CF6" opacity="0.2"/>
    <text x="180" y="27" font-family="Arial, sans-serif" font-size="16" fill="#8B5CF6" text-anchor="middle">E-Learning</text>
  </g>
  
  <!-- Bottom info -->
  <text x="600" y="550" font-family="Arial, sans-serif" font-size="24" fill="#808080" text-anchor="middle">
    ndevdigital@sent.com • Tunis, Tunisia
  </text>
</svg>`;

    // Return SVG with proper headers
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);