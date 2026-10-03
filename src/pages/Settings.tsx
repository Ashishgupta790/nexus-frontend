import {
  Check,
  LogOut,
  Monitor,
  Moon,
  Palette,
  Sun,
} from "lucide-react";
import { motion } from "motion/react";

import { PageHeader } from "../components/common/PageHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import {
  setTheme,
  toggleAnimations,
  toggleCompact,
} from "../features/workspace/workspaceSlice";

import { logout } from "../features/auth/authSlice";

import type { Theme } from "../types";

export default function Settings() {
  const dispatch = useAppDispatch();

  const {
    theme,
    compactMode,
    animations,
  } = useAppSelector((s) => s.workspace);

  const user = useAppSelector((s) => s.auth.user);

  const themes: [Theme, string, any][] = [
    ["light", "Light", Sun],
    ["dark", "Dark", Moon],
    ["oled", "OLED", Monitor],
  ];

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
          eyebrow="Workspace"
          title="Settings"
          description="Customize the NEXUS experience and your workspace preferences."
        />
      </motion.div>

      <div className="space-y-5">

        {/* Appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.15,
          }}
        >
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Palette
                  size={17}
                  className="text-zinc-500"
                />
              </motion.div>

              <div>
                <h2 className="font-medium">
                  Appearance
                </h2>

                <p className="text-xs text-zinc-600">
                  Choose how NEXUS looks.
                </p>
              </div>
            </div>

            {/* Themes */}
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {themes.map(([value, label, Icon], index) => (
                <motion.button
                  key={value}
                  onClick={() => dispatch(setTheme(value))}
                  className={`flex items-center gap-3 rounded-xl border p-3 text-left ${
                    theme === value
                      ? "border-white/30 bg-white/10"
                      : "border-white/10 bg-white/[.02]"
                  }`}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25 + index * 0.08,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  <Icon size={16} />

                  <span className="text-sm">
                    {label}
                  </span>

                  {theme === value && (
                    <motion.div
                      className="ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      <Check
                        size={14}
                        className="text-cyan-300"
                      />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.3,
          }}
        >
          <Card className="divide-y divide-white/5">

            <Setting
              label="Compact mode"
              description="Reduce spacing throughout the workspace."
              value={compactMode}
              onClick={() =>
                dispatch(toggleCompact())
              }
            />

            <Setting
              label="Animations"
              description="Enable subtle page and micro-interactions."
              value={animations}
              onClick={() =>
                dispatch(toggleAnimations())
              }
            />

            {/* Account */}
            <motion.div
              className="flex items-center justify-between p-5"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.015)",
              }}
            >
              <div>
                <p className="text-sm">
                  {user?.name ?? "Ragini"}
                </p>

                <p className="text-xs text-zinc-600">
                  {user?.email ?? "user@example.com"}
                </p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch(logout())
                  }
                >
                  <LogOut size={15} />
                  Log out
                </Button>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Setting({
  label,
  description,
  value,
  onClick,
}: {
  label: string;
  description: string;
  value: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="flex items-center justify-between gap-4 p-5"
      whileHover={{
        backgroundColor: "rgba(255,255,255,0.015)",
      }}
    >
      <div>
        <p className="text-sm">
          {label}
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          {description}
        </p>
      </div>

      <motion.button
        onClick={onClick}
        className={`h-6 w-11 rounded-full p-1 transition ${
          value
            ? "bg-white"
            : "bg-white/10"
        }`}
        whileTap={{
          scale: 0.92,
        }}
      >
        <motion.span
          className="block h-4 w-4 rounded-full bg-black"
          animate={{
            x: value ? 20 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </motion.button>
    </motion.div>
  );
}