import React from "react";
import { Button, Card, CardContent, Input } from "@mui/material";
import { Search } from "lucide-react";

const CommunityForum = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">Community Forum & Discussion</h1>
        <p className="text-gray-300 mt-2">Engage in legal discussions, ask questions, and collaborate with professionals.</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <Input
            type="text"
            placeholder="Search discussions..."
            className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-xl w-full focus:ring-blue-400"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      {/* Discussion Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Start a Discussion */}
        <Card className="bg-gray-800 p-4 rounded-2xl hover:scale-105 transition">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-300">Start a Discussion</h2>
            <p className="text-gray-400 mt-2">Post your legal queries and get insights from the community.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">Create Post</Button>
          </CardContent>
        </Card>

        {/* Trending Discussions */}
        <Card className="bg-gray-800 p-4 rounded-2xl hover:scale-105 transition">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-300">Trending Discussions</h2>
            <p className="text-gray-400 mt-2">Explore the most talked-about legal topics.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">View Trends</Button>
          </CardContent>
        </Card>

        {/* Legal Q&A */}
        <Card className="bg-gray-800 p-4 rounded-2xl hover:scale-105 transition">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-300">Live Legal Q&A</h2>
            <p className="text-gray-400 mt-2">Join real-time discussions with legal experts.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">Join Now</Button>
          </CardContent>
        </Card>

        {/* Categories */}
        <Card className="bg-gray-800 p-4 rounded-2xl hover:scale-105 transition">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-300">Browse Categories</h2>
            <p className="text-gray-400 mt-2">Filter discussions by legal topics like Civil Law, Criminal Law, etc.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">Explore</Button>
          </CardContent>
        </Card>

        {/* User Rankings */}
        <Card className="bg-gray-800 p-4 rounded-2xl hover:scale-105 transition">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-300">Top Contributors</h2>
            <p className="text-gray-400 mt-2">See the most active and knowledgeable community members.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">View Rankings</Button>
          </CardContent>
        </Card>

        {/* Legal Blog & Insights */}
        <Card className="bg-gray-800 p-4 rounded-2xl hover:scale-105 transition">
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-300">Legal Blogs & Insights</h2>
            <p className="text-gray-400 mt-2">Read articles and expert opinions on recent legal developments.</p>
            <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">Read More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunityForum;