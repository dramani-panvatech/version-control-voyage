
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Heart } from 'lucide-react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studioName: '',
    studioSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-green-50">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <Calendar className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              FlowTime
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight font-['Poppins']">
          Effortless Booking for
          <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
            Yoga & Pilates Studios
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-['Lato']">
          Simplify class scheduling, client management, payments, and more—all in one calming platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">


          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 font-['Poppins']">
                Start FREE
              </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800 text-center mb-2 font-['Poppins']">
                  Register
                </DialogTitle>
                <p className="text-gray-600 text-center font-['Lato']">
                  See how FlowTime can transform your studio operations
                </p>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 font-['Poppins']">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 text-base rounded-lg border-gray-200 focus:border-purple-400 font-['Lato']"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-['Poppins']">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 text-base rounded-lg border-gray-200 focus:border-purple-400 font-['Lato']"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studioName" className="text-sm font-medium text-gray-700 font-['Poppins']">Studio Name</Label>
                  <Input
                    id="studioName"
                    type="text"
                    placeholder="Your studio name"
                    value={formData.studioName}
                    onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                    className="h-12 text-base rounded-lg border-gray-200 focus:border-purple-400 font-['Lato']"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studioSize" className="text-sm font-medium text-gray-700 font-['Poppins']">Studio Size</Label>
                  <Select value={formData.studioSize} onValueChange={(value) => setFormData({ ...formData, studioSize: value })}>
                    <SelectTrigger className="h-12 text-base rounded-lg border-gray-200 focus:border-purple-400 font-['Lato']">
                      <SelectValue placeholder="Select your studio size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo">Solo Instructor</SelectItem>
                      <SelectItem value="small">Small Studio (2-5 instructors)</SelectItem>
                      <SelectItem value="medium">Medium Studio (6-15 instructors)</SelectItem>
                      <SelectItem value="large">Large Studio (16+ instructors)</SelectItem>
                      <SelectItem value="franchise">Franchise/Multiple Locations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-base font-semibold font-['Poppins']">
                  Schedule Demo
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 font-['Poppins']">Wellness-Focused</h3>
            <p className="text-gray-600 font-['Lato']">Designed specifically for yoga and pilates studios</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 font-['Poppins']">Smart Scheduling</h3>
            <p className="text-gray-600 font-['Lato']">AI-powered booking with automated waitlists</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold text-xl">$</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 font-['Poppins']">Easy Payments</h3>
            <p className="text-gray-600 font-['Lato']">Integrated billing with packages and discounts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
