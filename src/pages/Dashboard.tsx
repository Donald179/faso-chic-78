import { Eye, MousePointer, ShoppingBag, DollarSign, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const stats = [
  { label: "Vues", value: "12 450", icon: Eye, change: "+12%" },
  { label: "Clics", value: "3 280", icon: MousePointer, change: "+8%" },
  { label: "Ventes", value: "156", icon: ShoppingBag, change: "+24%" },
  { label: "Revenus", value: "2.4M FCFA", icon: DollarSign, change: "+18%" },
];

const salesData = [
  { month: "Jan", ventes: 12 },
  { month: "Fév", ventes: 19 },
  { month: "Mar", ventes: 15 },
  { month: "Avr", ventes: 25 },
  { month: "Mai", ventes: 32 },
  { month: "Jun", ventes: 28 },
];

const myProducts = [
  { id: 1, name: "Robe Ankara Florale", price: 18500, stock: 12, vues: 450, image: product1 },
  { id: 2, name: "Chemise Wax Homme", price: 12000, stock: 8, vues: 320, image: product2 },
  { id: 3, name: "Kaftan Bogolan", price: 25000, stock: 5, vues: 680, image: product3 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground">Tableau de bord</h1>
              <p className="font-body text-muted-foreground">Bienvenue, Atelier Sira 👋</p>
            </div>
            <Button className="rounded-lg font-heading font-semibold text-sm">
              <Plus className="h-4 w-4 mr-2" /> Ajouter un produit
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="rounded-xl border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-body text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chart */}
          <Card className="rounded-xl border-border mb-8">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Évolution des ventes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fontFamily: 'Inter' }} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="ventes" fill="hsl(24, 100%, 50%)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Products list */}
          <Card className="rounded-xl border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-heading text-lg">Mes produits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myProducts.map((p) => (
                  <div key={p.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <img src={p.image} alt={p.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body text-sm font-medium text-foreground truncate">{p.name}</h4>
                      <p className="font-body text-xs text-muted-foreground">{p.vues} vues · Stock: {p.stock}</p>
                    </div>
                    <p className="font-heading text-sm font-bold text-foreground hidden sm:block">{p.price.toLocaleString()} FCFA</p>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-3.5 w-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
