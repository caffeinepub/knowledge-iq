import { BookOpen, Target, Globe, TrendingUp, FileText, Download, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'knowledge-iq'
  );

  const examCategories = [
    { name: 'UPSC', description: 'Union Public Service Commission' },
    { name: 'SSC', description: 'Staff Selection Commission' },
    { name: 'RRB', description: 'Railway Recruitment Board' },
    { name: 'WBCS', description: 'West Bengal Civil Service' },
    { name: 'PSC', description: 'Public Service Commission' },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Daily GK',
      description: 'Stay updated with daily general knowledge questions and current affairs to boost your exam preparation.',
      action: 'Explore Daily GK',
    },
    {
      icon: FileText,
      title: 'Mock Tests',
      description: 'Practice with comprehensive mock tests designed to simulate real exam conditions and improve your performance.',
      action: 'Take Mock Test',
    },
    {
      icon: Globe,
      title: 'Current Affairs',
      description: 'Get the latest national and international news, events, and updates relevant to competitive exams.',
      action: 'Read Current Affairs',
    },
    {
      icon: Target,
      title: 'Previous Year Questions',
      description: 'Access a vast collection of previous year question papers with detailed solutions and explanations.',
      action: 'View Questions',
    },
    {
      icon: Download,
      title: 'Free PDFs',
      description: 'Download free study materials, notes, and resources to enhance your exam preparation journey.',
      action: 'Download PDFs',
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Active Learners' },
    { value: '10,000+', label: 'Practice Questions' },
    { value: '500+', label: 'Study Materials' },
    { value: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron">
              <BookOpen className="h-6 w-6 text-navy" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Knowledge IQ</h2>
              <p className="text-xs text-muted-foreground">Exam Excellence</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#exams" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Exams
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark py-16 md:py-24 lg:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-saffron/20 bg-saffron/10 px-4 py-1.5 text-sm text-saffron w-fit">
                  <CheckCircle className="h-4 w-4" />
                  <span>Trusted by 50,000+ Students</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Master Your Competitive Exams
                </h1>
                <p className="text-lg text-gray-300 md:text-xl max-w-2xl">
                  Comprehensive preparation platform for UPSC, SSC, RRB, WBCS, and PSC exams. Access daily GK, mock tests, current affairs, and free study materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-saffron hover:bg-saffron-dark text-navy font-semibold">
                    Start Practice
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Download Free PDFs
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-2xl font-bold text-saffron">{stat.value}</span>
                      <span className="text-sm text-gray-400">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/assets/generated/knowledge-iq-hero.dim_1600x900.png"
                  alt="India map outline with educational icons representing competitive exam preparation including book, target, globe, and chart symbols"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
        </section>

        {/* Exam Categories */}
        <section id="exams" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Prepare for Top Competitive Exams
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive study materials and practice tests for India's most prestigious competitive examinations
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {examCategories.map((exam, index) => (
                <Card key={index} className="border-2 hover:border-saffron/50 transition-all hover:shadow-lg">
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-xl">{exam.name}</CardTitle>
                    <CardDescription className="text-xs">{exam.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive resources and tools designed to help you excel in your competitive exam preparation
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all border-2 hover:border-saffron/30">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-saffron/10 group-hover:bg-saffron/20 transition-colors">
                          <Icon className="h-6 w-6 text-saffron" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-start text-saffron hover:text-saffron hover:bg-saffron/10">
                        {feature.action}
                        <TrendingUp className="ml-auto h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-navy to-navy-dark">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
              <Users className="h-16 w-16 text-saffron" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Join Thousands of Successful Students
              </h2>
              <p className="text-lg text-gray-300">
                Start your journey towards success today with our comprehensive study materials and expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="bg-saffron hover:bg-saffron-dark text-navy font-semibold">
                  Start Practice
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Download Free PDFs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron">
                  <BookOpen className="h-5 w-5 text-navy" />
                </div>
                <span className="text-lg font-bold">Knowledge IQ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for competitive exam preparation. Excel in UPSC, SSC, RRB, WBCS, and PSC exams.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#exams" className="hover:text-foreground transition-colors">Exams</a></li>
                <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Daily GK</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Mock Tests</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Current Affairs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Free PDFs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Knowledge IQ. All rights reserved. | Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-saffron hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
