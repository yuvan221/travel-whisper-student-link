
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, Video, Users, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

// Mock translator data
const translators = [
  {
    id: 1,
    name: "Maria Garcia",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Spanish", "Portuguese"],
    location: "Barcelona, Spain",
    rating: 4.9,
    reviews: 27,
    price: 15,
    serviceTypes: ["virtual", "in-person"],
    university: "University of Barcelona",
    bio: "International Relations student with 3 years of translation experience. I love showing tourists around the city!",
  },
  {
    id: 2,
    name: "Kenji Tanaka",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Japanese", "Korean"],
    location: "Tokyo, Japan",
    rating: 4.8,
    reviews: 42,
    price: 18,
    serviceTypes: ["virtual"],
    university: "Tokyo University",
    bio: "Computer Science student. Fluent in English, Japanese, and Korean. Available for virtual translation and tech help.",
  },
  {
    id: 3,
    name: "Sofia Navarro",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Spanish", "French"],
    location: "Madrid, Spain",
    rating: 4.7,
    reviews: 36,
    price: 14,
    serviceTypes: ["virtual", "in-person"],
    university: "Complutense University of Madrid",
    bio: "Tourism major who loves meeting people from different cultures. Can help with both virtual and in-person translation needs.",
  },
  {
    id: 4,
    name: "Lucas Meyer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "German", "Dutch"],
    location: "Berlin, Germany",
    rating: 4.9,
    reviews: 31,
    price: 16,
    serviceTypes: ["in-person"],
    university: "Humboldt University of Berlin",
    bio: "History student specializing in guided museum tours with translation. I'll help you experience Berlin like a local!",
  },
  {
    id: 5,
    name: "Aisha Patel",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Hindi", "Urdu", "Punjabi"],
    location: "Mumbai, India",
    rating: 4.8,
    reviews: 24,
    price: 12,
    serviceTypes: ["virtual", "in-person"],
    university: "University of Mumbai",
    bio: "Literature student and language enthusiast. I can help with translations for business meetings or tourist adventures.",
  },
  {
    id: 6,
    name: "Chen Wei",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    languages: ["English", "Mandarin", "Cantonese"],
    location: "Shanghai, China",
    rating: 4.7,
    reviews: 19,
    price: 15,
    serviceTypes: ["virtual"],
    university: "Fudan University",
    bio: "Business student offering translation services for both travelers and business professionals visiting China.",
  },
];

const languages = [
  "All languages",
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Korean",
  "Mandarin",
  "Cantonese",
  "Hindi",
  "Portuguese",
  "Russian",
];

const Translators = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState("All languages");
  const [serviceType, setServiceType] = useState("all");
  const [filteredTranslators, setFilteredTranslators] = useState(translators);

  // Parse query params for initial service type
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const typeParam = params.get("type");
    if (typeParam && ["virtual", "in-person"].includes(typeParam)) {
      setServiceType(typeParam);
    }
  }, [location]);

  // Filter translators based on search criteria
  useEffect(() => {
    let filtered = [...translators];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (translator) =>
          translator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          translator.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          translator.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by language
    if (language !== "All languages") {
      filtered = filtered.filter((translator) => translator.languages.includes(language));
    }

    // Filter by service type
    if (serviceType !== "all") {
      filtered = filtered.filter((translator) => translator.serviceTypes.includes(serviceType));
    }

    setFilteredTranslators(filtered);
  }, [searchTerm, language, serviceType]);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Translator</h1>
            <p className="text-lg text-gray-600">
              Connect with student translators who can help you navigate language barriers during your travels.
            </p>
          </div>

          {/* Search filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search by name, location..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang} value={lang}>
                        {lang}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="virtual">Virtual Only</SelectItem>
                    <SelectItem value="in-person">In-Person Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Translator results */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{filteredTranslators.length} translators available</h2>
            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTranslators.map((translator) => (
              <Card key={translator.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16 border-2 border-white shadow">
                          <img src={translator.avatar} alt={translator.name} />
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{translator.name}</h3>
                          <p className="text-sm text-gray-500">{translator.location}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">{translator.rating}</span>
                            <span className="text-sm text-gray-500 ml-1">({translator.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {translator.serviceTypes.includes("virtual") && (
                          <div className="p-1 bg-blue-100 rounded" title="Offers virtual translation">
                            <Video className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                        {translator.serviceTypes.includes("in-person") && (
                          <div className="p-1 bg-green-100 rounded" title="Offers in-person translation">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-700 line-clamp-2">{translator.bio}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-1">Languages</p>
                      <div className="flex flex-wrap gap-1">
                        {translator.languages.map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-primary font-bold">
                        ${translator.price} <span className="text-gray-500 font-normal text-sm">/ hour</span>
                      </div>
                      <Button size="sm">View Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Translators;
