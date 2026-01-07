import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-40 flex items-center gap-4 px-4 py-2 bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg"
    >
      <div className="flex items-center gap-2 text-sm font-mono">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="text-foreground">{formatDate(dateTime)}</span>
      </div>
      <div className="w-px h-4 bg-border" />
      <div className="flex items-center gap-2 text-sm font-mono">
        <Clock className="w-4 h-4 text-accent" />
        <span className="text-foreground">{formatTime(dateTime)}</span>
      </div>
    </motion.div>
  );
};

export default DateTimeDisplay;
