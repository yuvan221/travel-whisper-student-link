import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ApplicationForm } from "@/components/translator/ApplicationForm";

const BecomeTranslator = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Become a Translator</h1>
            <p className="text-lg text-gray-600">
              Share your language skills, connect with travelers, and earn money while building valuable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why Become a LinguaLink Translator?</h2>
              <ul className="space-y-4">
                {[
                  "Flexible schedule that works around your studies",
                  "Earn competitive rates for both virtual and in-person sessions",
                  "Build valuable communication and intercultural skills",
                  "Meet people from around the world",
                  "Add professional experience to your resume",
                  "Get paid promptly through secure payment systems"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Requirements</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Currently enrolled as a student or recent graduate",
                  "Fluent in at least two languages (one must be local)",
                  "Strong communication skills",
                  "Reliable with good time management",
                  "Access to a smartphone and reliable internet",
                  "Passion for helping others navigate language barriers"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Apply",
                  description: "Fill out our application form with your language skills and background."
                },
                {
                  title: "Get Verified",
                  description: "Complete a brief language assessment and verification process."
                },
                {
                  title: "Start Translating",
                  description: "Set your availability, rates, and start connecting with travelers."
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-medium text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="px-8" onClick={() => setIsDialogOpen(true)}>
              Apply Now
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Applications are typically reviewed within 48 hours
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Translator Application</DialogTitle>
              </DialogHeader>
              <ApplicationForm onClose={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeTranslator;
