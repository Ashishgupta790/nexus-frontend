import { Activity as ActivityIcon } from "lucide-react";
import { motion } from "motion/react";

import { PageHeader } from "../components/common/PageHeader";
import { ActivityFeed } from "../components/dashboard/ActivityFeed";

export default function Activity() {
  return (
    <motion.div
      className="mx-auto max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageHeader
          eyebrow="Timeline"
          title="Activity"
          description="A chronological view of everything changing in your workspace."
          action={
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              transition={{ duration: 0.2 }}
            >
              <ActivityIcon
                size={20}
                className="text-zinc-600"
              />
            </motion.div>
          }
        />
      </motion.div>

      {/* Activity feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        <ActivityFeed limit={10} />
      </motion.div>
    </motion.div>
  );
}