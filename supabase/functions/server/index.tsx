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

async function initializeStorage() {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
    
    if (!bucketExists) {
      const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: false,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
      });
      
      if (error) {
        console.error('Error creating storage bucket:', error);
      } else {
        console.log(`Storage bucket "${BUCKET_NAME}" created successfully`);
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

Deno.serve(app.fetch);