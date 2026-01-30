import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you ASAP.",
    });
    form.reset();
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Section>
        <h1 className="text-5xl md:text-8xl font-display font-bold mb-16">
          GET IN <span className="text-primary">TOUCH</span>
        </h1>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <Section delay={0.2}>
          <div className="space-y-12">
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Have a project in mind or want to discuss AI, ML, or web development? 
              I'm always open to collaborations and learning opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground">EMAIL</p>
                  <a href="mailto:sinchananagaraj2005508@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">sinchananagaraj2005508@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground">PHONE</p>
                  <a href="tel:+918660871654" className="text-xl font-bold hover:text-primary transition-colors">+91 8660871654</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-mono text-muted-foreground">LOCATION</p>
                  <p className="text-xl font-bold">Mysore, Karnataka, India</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="text-sm font-mono text-muted-foreground">SOCIAL PROFILES</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/sinchana-nagaraj" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors font-bold underline">
                    LinkedIn
                  </a>
                  <span className="text-white/20">•</span>
                  <a href="https://github.com/SinchanaNagaraj" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors font-bold underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Contact Form */}
        <Section delay={0.4}>
          <div className="bg-card/30 border border-white/10 p-8 backdrop-blur-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-widest">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Cyber Punk" 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary h-12 font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-widest">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="cyber@punk.com" 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary h-12 font-mono"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs uppercase tracking-widest">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field} 
                          className="bg-background/50 border-white/10 focus:border-primary min-h-[150px] font-mono resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-black hover:bg-white font-bold h-12 text-lg uppercase tracking-wider rounded-none transition-all duration-300"
                >
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </div>
        </Section>
      </div>
    </div>
  );
}
