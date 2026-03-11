import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import confetti from 'canvas-confetti';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'meghashyam1008@gmail.com', href: 'mailto:meghashyam1008@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+1(314)885-3349', href: 'tel:+13148853349' },
    { icon: MapPin, label: 'Location', value: 'Chesterfield, MO', href: null },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#001F3F', '#F5F5DC', '#3D2B1F'],
      });
      toast({
        title: "Message Transmitted 🎉",
        description: "Your inquiry has been successfully received.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-accent font-heading font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Connection</span>
          <h2 className="text-6xl md:text-7xl font-heading mb-6 text-foreground tracking-tighter">
            Get In <span className="text-accent italic">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-accent/20 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-accent rounded-full mx-auto" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 max-w-7xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href || '#'}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-8 glass-premium p-8 rounded-[3rem] hover:border-accent/40 transition-all group overflow-hidden"
                >
                  <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-xl font-medium text-foreground tracking-tight">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="glass-premium p-12 rounded-[3.5rem] text-center group">
              <h3 className="text-3xl font-heading mb-8 leading-tight tracking-tight">
                Let's build something <br />
                <span className="text-accent font-serif italic">extraordinary.</span>
              </h3>
              <p className="text-muted-foreground font-light mb-10 italic serif">
                "The best way to predict the future is to invent it."
              </p>
              <div className="flex justify-center gap-8">
                {[
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/megha-shyam-h/' },
                  { Icon: Mail, href: 'mailto:meghashyam1008@gmail.com' },
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.2 }}
                    className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all shadow-xl"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-premium p-10 md:p-16 rounded-[4.5rem] relative">
              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-accent uppercase tracking-widest ml-6">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-16 px-8 rounded-3xl bg-foreground/5 border-foreground/5 focus:border-accent/40 focus:ring-accent/10 transition-all placeholder:text-muted-foreground/30 text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-accent uppercase tracking-widest ml-6">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="hello@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-16 px-8 rounded-3xl bg-foreground/5 border-foreground/5 focus:border-accent/40 focus:ring-accent/10 transition-all placeholder:text-muted-foreground/30 text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-accent uppercase tracking-widest ml-6">How can I help?</label>
                  <Textarea
                    name="message"
                    placeholder="Describe your vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="p-8 rounded-[2.5rem] bg-foreground/5 border-foreground/5 focus:border-accent/40 focus:ring-accent/10 transition-all resize-none placeholder:text-muted-foreground/30 text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full h-20 rounded-[2rem] bg-accent text-white hover:bg-accent/90 shadow-2xl transition-all group overflow-hidden relative"
                >
                  <span className="relative z-10 font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-4 text-sm">
                    {isSending ? "Syncing..." : "Initialize Transmission"}
                    {!isSending && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
