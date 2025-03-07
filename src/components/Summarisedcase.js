import { useState } from "react";
import { Card, CardContent, CardActions, Typography, TextField, Button } from "@mui/material";
import { FaSearch, FaDownload, FaBookmark } from "react-icons/fa";

export default function SummarizedCaseLaw() {
  const [query, setQuery] = useState("");
  const [summary, setSummary] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const handleSearch = async () => {
    // Placeholder for AI-generated case law summary
    setSummary({
      title: "Landmark Supreme Court Case on Privacy",
      summary: "This case established the right to privacy as a fundamental right under the Constitution...",
      citation: "2023 SC 4567",
    });
  };

  const handleBookmark = () => {
    if (summary && !bookmarks.includes(summary)) {
      setBookmarks([...bookmarks, summary]);
    }
  };

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", padding: "20px", color: "white" }}>
      <Typography variant="h3" align="center" color="primary">Summarized Case Laws</Typography>
      <Typography variant="subtitle1" align="center" color="gray">Quick AI-powered case law summaries.</Typography>

      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Enter case citation or keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ backgroundColor: "#333", color: "white", width: "50%" }}
          InputProps={{ style: { color: "white" } }}
        />
        <Button variant="contained" color="primary" sx={{ marginLeft: "10px" }} onClick={handleSearch}>
          <FaSearch style={{ marginRight: "5px" }} /> Search
        </Button>
      </div>

      {/* Case Summary Section */}
      {summary && (
        <Card sx={{ backgroundColor: "#1e1e1e", marginTop: "20px", padding: "20px", color: "white" }}>
          <CardContent>
            <Typography variant="h5">{summary.title}</Typography>
            <Typography variant="body1" sx={{ marginTop: "10px", color: "#ccc" }}>{summary.summary}</Typography>
            <Typography variant="body2" sx={{ marginTop: "10px", color: "#66b2ff" }}>Citation: {summary.citation}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" sx={{ backgroundColor: "#444", marginRight: "10px" }}>
              <FaDownload style={{ marginRight: "5px" }} /> Download
            </Button>
            <Button variant="contained" color="warning" onClick={handleBookmark}>
              <FaBookmark style={{ marginRight: "5px" }} /> Bookmark
            </Button>
          </CardActions>
        </Card>
      )}

      {/* Bookmarked Cases Section */}
      {bookmarks.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <Typography variant="h4" color="primary">Bookmarked Cases</Typography>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginTop: "20px" }}>
            {bookmarks.map((caseLaw, index) => (
              <Card key={index} sx={{ backgroundColor: "#1e1e1e", padding: "15px", color: "white" }}>
                <CardContent>
                  <Typography variant="h6">{caseLaw.title}</Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px", color: "#ccc" }}>{caseLaw.summary}</Typography>
                  <Typography variant="body2" sx={{ marginTop: "10px", color: "#66b2ff" }}>Citation: {caseLaw.citation}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
