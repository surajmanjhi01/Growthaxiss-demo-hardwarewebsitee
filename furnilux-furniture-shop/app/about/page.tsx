"use client"
import Image from "next/image"
import ModernHeader from "@/components/modern-header"
import ModernFooter from "@/components/modern-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Heart, Leaf, Target, Eye } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every piece is carefully crafted using premium materials and traditional techniques combined with modern innovation.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize customer satisfaction and strive to exceed expectations with every interaction and purchase.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We're committed to environmental responsibility through sustainable sourcing and eco-friendly manufacturing.",
  },
  {
    icon: Users,
    title: "Family Heritage",
    description: "Founded as a family business, we maintain our values of integrity, trust, and personal service.",
  },
]

const team = [
  {
    name: "Muller Thomas",
    role: "Founder & CEO",
    image: "/images/team-muller.jpg",
    bio: "With over 15 years in furniture design, Muller founded Furnilux to bring premium, accessible furniture to modern homes.",
  },
  {
    name: "Harry Thompson",
    role: "Head of Design",
    image: "/images/team-harry.jpg",
    bio: "Harry leads our design team with a passion for creating functional, beautiful pieces that stand the test of time.",
  },
  {
    name: "Jane Williams",
    role: "Customer Experience Director",
    image: "/images/team-jane.jpg",
    bio: "Jane ensures every customer has an exceptional experience from browsing to delivery and beyond.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/30 py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">About Furnilux</h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              We're passionate about creating beautiful, functional furniture that transforms houses into homes. Since
              2010, we've been dedicated to bringing you premium quality pieces at accessible prices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Furnilux began as a small family workshop in 2010, born from a simple belief: everyone deserves
                  beautiful, well-made furniture in their home. What started as a passion project has grown into a
                  trusted brand serving thousands of customers nationwide.
                </p>
                <p>
                  Our founder, Sarah Johnson, noticed a gap in the market for furniture that combined premium quality
                  with modern design and reasonable pricing. She set out to create a company that would bridge this gap,
                  working directly with skilled craftspeople and sustainable suppliers.
                </p>
                <p>
                  Today, we continue to honor our founding principles while embracing innovation and growth. Every piece
                  in our collection is carefully selected or designed to meet our high standards for quality, style, and
                  value.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <Image
                src="/images/about-image.jpg"
                alt="Furnilux workshop"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Office & Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Workspace</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look inside our modern office and design studio where creativity meets craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative animate-fade-in">
              <Image
                src="/images/company-office.jpg"
                alt="Furnilux modern office space"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-80"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-gray-900">Modern Office Space</h3>
                <p className="text-sm text-gray-600">Where innovation happens daily</p>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <Image
                src="/images/team-meeting.jpg"
                alt="Furnilux team collaboration"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-80"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-semibold text-gray-900">Team Collaboration</h3>
                <p className="text-sm text-gray-600">Working together to serve you better</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <Image
              src="/images/design-studio.jpg"
              alt="Furnilux design studio"
              width={1200}
              height={500}
              className="rounded-2xl shadow-xl object-cover w-full h-96"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Design Studio</h3>
              <p className="text-lg opacity-90 max-w-md">
                Our creative hub where every piece is conceptualized, designed, and perfected before reaching your home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl animate-fade-in">
              <CardContent className="p-8 text-center">
                <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make premium, sustainable furniture accessible to everyone while maintaining the highest standards
                  of craftsmanship and customer service. We believe your home should reflect your personality and
                  provide comfort for years to come.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl animate-fade-in">
              <CardContent className="p-8 text-center">
                <Eye className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading sustainable furniture brand that transforms living spaces worldwide. We envision
                  a future where beautiful, eco-friendly furniture is the standard, not the exception.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from product selection to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
              >
                <CardContent className="p-8">
                  <value.icon className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Furnilux who work every day to bring you exceptional furniture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
              >
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/80 text-lg">Happy Customers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80 text-lg">Products</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">14</div>
              <div className="text-primary-foreground/80 text-lg">Years Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80 text-lg">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}
