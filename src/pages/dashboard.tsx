import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  X,
  Save,
  User,
  BarChart3,
  Eye,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/layout";

import {projectsData} from "@/lib/projectsData";

const PROJECT_IMAGE_BASE_PATH = "/projects img/";

// Mock data
const mockPosts = [
  {
    id: 1,
    title: "Bienvenue sur le tableau de bord",
    excerpt: "Voici un aperçu de votre interface d’administration",
    content: "Ceci est un exemple d’article pour votre admin panel.",
    category: "Informations",
    tags: ["dashboard", "demo"],
    publishedAt: new Date().toISOString(),
    status: "published",
  },
];

const mockProjects = projectsData;
   
const Dashboard: React.FC = () => {
  const { toast } = useToast();

  const [posts, setPosts] = useState(mockPosts);
  const [projects, setProjects] = useState(mockProjects);

  const [editingPost, setEditingPost] = useState<any>(null);
  const [editingProject, setEditingProject] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
  });

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    repogit: "",
    techString: "",
    publishatStr: "",
    imageUrl: "",
  });

  /* ---------------------------
     Fonctions Article
  --------------------------- */
  const handleCreatePost = () => {
    setEditingPost(null);
    setFormData({ title: "", excerpt: "", content: "", category: "", tags: "" });
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags.join(", "),
    });
  };

  const handleSavePost = () => {
    if (!formData.title || !formData.content) {
      toast({ title: "Erreur", description: "Le titre et le contenu sont requis.", variant: "destructive" });
      return;
    }
    const newPost = { ...formData, tags: formData.tags.split(",").map((t) => t.trim()), publishedAt: new Date().toISOString(), status: "published" };
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === editingPost.id ? { ...p, ...newPost } : p)));
      toast({ title: "Succès", description: "Article mis à jour." });
    } else {
      setPosts([{ id: Date.now(), ...newPost }, ...posts]);
      toast({ title: "Succès", description: "Article ajouté." });
    }
    setEditingPost(null);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((p) => p.id !== id));
    toast({ title: "Supprimé", description: "Article supprimé." });
  };

  /* ---------------------------
     Fonctions Projet
  --------------------------- */
  const handleCreateProject = () => {
    setEditingProject(null);
    setProjectForm({ title: "", description: "", repogit: "", techString: "", publishatStr: "", imageUrl: "" });
  };

  const handleEditProject = (p: any) => {
    setEditingProject(p);
    setProjectForm({
      title: p.title,
      description: p.description,
      repogit: p.repoGit || "",
      techString: p.tech.map((t: any) => t.name).join(", "),
      publishatStr: p.publishedAt ? p.publishedAt.slice(0, 10) : "",
      imageUrl: p.imageUrl || "",
    });
  };

  const handleSaveProject = () => {
    if (!projectForm.title || !projectForm.description) {
      toast({ title: "Erreur", description: "Le titre et la description sont requis.", variant: "destructive" });
      return;
    }

    const newProject = {
      id: editingProject?.id || Date.now().toString(),
      title: projectForm.title,
      description: projectForm.description,
      repoGit: projectForm.repogit,
      tech: projectForm.techString.split(",").map((name) => ({ name: name.trim(), icon: null })),
      publishedAt: new Date(projectForm.publishatStr || Date.now()).toISOString(),
      imageUrl: projectForm.imageUrl,
    };

    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? newProject : p)));
      toast({ title: "Succès", description: "Projet mis à jour." });
    } else {
      setProjects([newProject, ...projects]);
      toast({ title: "Succès", description: "Projet ajouté." });
    }

    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
    toast({ title: "Supprimé", description: "Projet supprimé." });
  };

  /* ---------------------------
     Statistiques
  --------------------------- */
  const stats = {
    totalPosts: posts.length,
    published: posts.filter((p) => p.status === "published").length,
    projects: projects.length,
  };

  /* ---------------------------
     UI
  --------------------------- */
  return (
    <Layout title="Admin Dashboard" description="Gestion de contenu">
      <section className="py-10 px-4 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <header className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Dashboard</h1>
              <p className="text-text-secondary">Gérez vos articles et vos projets facilement</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreatePost}>
                <Plus className="w-4 h-4 mr-1" /> Nouvel Article
              </Button>
              <Button onClick={handleCreateProject} variant="outline">
                <Plus className="w-4 h-4 mr-1" /> Nouveau Projet
              </Button>
            </div>
          </header>

          {/* Statistiques */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Articles publiés</p>
                  <h2 className="text-2xl font-semibold">{stats.published}</h2>
                </div>
                <Eye className="w-6 h-6 text-primary" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Projets</p>
                  <h2 className="text-2xl font-semibold">{stats.projects}</h2>
                </div>
                <BarChart3 className="w-6 h-6 text-primary" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Articles</p>
                  <h2 className="text-2xl font-semibold">{stats.totalPosts}</h2>
                </div>
                <User className="w-6 h-6 text-primary" />
              </CardContent>
            </Card>
          </div>

          {/* Articles */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Articles</h2>
            {editingPost && (
              <Card className="mb-6">
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Modifier l'article</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setEditingPost(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Titre"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <Input
                    placeholder="Extrait"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  />
                  <Textarea
                    placeholder="Contenu"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSavePost}>
                      <Save className="w-4 h-4 mr-1" /> Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setEditingPost(null)}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-5">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{post.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground">{post.excerpt}</p>
                    <Badge className="mt-2">{post.category}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projets */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Projets</h2>
            {editingProject && (
              <Card className="mb-6">
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Modifier le projet</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setEditingProject(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input
                    placeholder="Titre"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Description"
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  />
                  <Input
                    placeholder="Technologies (séparées par des virgules)"
                    value={projectForm.techString}
                    onChange={(e) => setProjectForm({ ...projectForm, techString: e.target.value })}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProject}>
                      <Save className="w-4 h-4 mr-1" /> Sauvegarder
                    </Button>
                    <Button variant="outline" onClick={() => setEditingProject(null)}>
                      Annuler
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => (
                <Card key={p.id}>
                  <CardContent className="p-5">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{p.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditProject(p)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteProject(p.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground">{p.description}</p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {p.tech.map((t, i) => (
                        <Badge key={i}>{t.name}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
