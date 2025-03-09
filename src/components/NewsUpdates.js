import { useState } from "react";
import { Card, CardContent, Input, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Globe, Search, Bookmark } from "lucide-react";

export default function LegalNewsUpdates() {
  const [news] = useState([
    {
      title: "Supreme Court Rules on Landmark Privacy Case",
      description: "The Supreme Court has delivered a historic ruling on digital privacy rights, impacting data protection laws worldwide.",
      url: "https://example.com/supreme-court-privacy",
      source: { name: "Supreme Court News" },
    },
    {
      title: "New Cybersecurity Law Passed to Combat Online Crimes",
      description: "The government has introduced a strict cybersecurity law aimed at protecting citizens from increasing cyber threats.",
      url: "https://example.com/cybersecurity-law",
      source: { name: "Tech Law Today" },
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNews, setFilteredNews] = useState(news);
  const [bookmarked, setBookmarked] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredNews(news.filter((article) =>
      article.title.toLowerCase().includes(value) || article.description.toLowerCase().includes(value)
    ));
  };

  const handleBookmark = (article) => {
    setBookmarked((prev) => prev.some((item) => item.title === article.title) ? prev : [...prev, article]);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to right, #141e30, #243b55)",
      color: "white",
      padding: "20px",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "bold",
            backgroundClip: "text",
            color: "white",
          }}
        >
          Legal News & Updates
        </motion.h1>

        {/* Search Box */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", position: "relative" }}>
          <Input
            type="text"
            placeholder="Search legal news..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: "100%",
              padding: "10px 40px 10px 10px",  // Adjusted padding so text doesn't overlap with icon
              borderRadius: "8px",
              backgroundColor: "#3b5268",
              color: "white",
              border: "none",
            }}
          />
          <Search style={{
            position: "absolute",
            right: "15px", // Positioned on the right outside the text
            color: "white",
          }} />
        </div>

        {/* News Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {filteredNews.map((article, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
              <Card style={{ backgroundColor: "#2a3b4f", borderRadius: "10px", padding: "10px" }}>
                <CardContent>
                  <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#b0c4de" }}>{article.title}</h2>
                  <p style={{ fontSize: "14px", color: "white" }}>{article.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer"
                      style={{ textDecoration: "none", padding: "6px 12px", backgroundColor: "#4682b4", color: "white", borderRadius: "5px" }}>
                      <Globe style={{ marginRight: "5px" }} /> Read More
                    </a>
                    <Button onClick={() => handleBookmark(article)} style={{ backgroundColor: "transparent" }}>
                      <Bookmark style={{ color: "#ffd700" }} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
