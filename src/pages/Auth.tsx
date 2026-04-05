import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-12">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Retour à l'accueil
        </Link>

        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            FASO<span className="text-primary">MODE</span>
          </h1>
          <p className="font-body text-muted-foreground mb-8">
            {isLogin ? "Connectez-vous à votre compte" : "Créez votre compte et lancez votre boutique"}
          </p>

          <div className="space-y-5">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="font-body text-sm font-medium">Prénom</Label>
                  <Input id="firstName" placeholder="Sira" className="mt-1.5 rounded-lg" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="font-body text-sm font-medium">Nom</Label>
                  <Input id="lastName" placeholder="Ouédraogo" className="mt-1.5 rounded-lg" />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="font-body text-sm font-medium">Email</Label>
              <Input id="email" type="email" placeholder="sira@example.com" className="mt-1.5 rounded-lg" />
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="phone" className="font-body text-sm font-medium">Téléphone</Label>
                <Input id="phone" type="tel" placeholder="+226 70 00 00 00" className="mt-1.5 rounded-lg" />
              </div>
            )}

            <div>
              <Label htmlFor="password" className="font-body text-sm font-medium">Mot de passe</Label>
              <div className="relative mt-1.5">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" className="pr-10 rounded-lg" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button className="w-full py-6 font-heading text-sm tracking-wider uppercase font-semibold rounded-lg">
              {isLogin ? "Se connecter" : "Créer mon compte"}
            </Button>

            <p className="text-center font-body text-sm text-muted-foreground">
              {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex flex-1 bg-dark items-center justify-center p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
        <div className="relative text-center">
          <h2 className="font-heading text-4xl font-bold text-dark-foreground mb-4">
            Crée ta boutique.<br /><span className="text-primary">Vends ton style.</span>
          </h2>
          <p className="font-body text-dark-foreground/60 max-w-sm mx-auto">
            Rejoins la première marketplace de mode africaine du Burkina Faso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
