import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");

  const addIngredient = (name: string) => {
    const newList = [...ingredients, name];
    setIngredients(newList);

    if (newList.length >= 3) {
      setResult(generatePotion(newList));
      setIngredients([]);
    }
  };

  const generatePotion = (items: string[]) => {
    const names = [
      "Elixier der Schatten",
      "Trank der Dämmerung",
      "Schleim des Bösen",
      "Flüssigkeit des Chaos",
      "Trank des ewigen Spuks",
      "Zauber der Mitternacht",
      "Brei der Verzweiflung",
      "Essenz der Nacht",
    ];
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-center text-white p-6 overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <h1 className="text-4xl font-bold text-orange-400 mb-6 drop-shadow-lg">
        🧪 Hexenkessel-Mixer
      </h1>

      <div className="relative w-48 h-48 mx-auto mt-10">
        <div className="absolute inset-0 bg-gray-800 rounded-full border-8 border-gray-900 shadow-2xl" />

        <motion.div
          className="absolute bottom-1/2 left-0 right-0 h-1/2 rounded-t-full bg-gradient-to-t from-orange-600 to-yellow-400"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 0], y: [-10, -120] }}
            transition={{
              delay: i * 0.6,
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ left: `${25 + i * 20}px`, bottom: "60px" }}
          />
        ))}

        {/* Rauch */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`smoke-${i}`}
            className="absolute w-16 h-16 bg-gray-400/20 rounded-full blur-2xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.4, 0], y: [-10, -140] }}
            transition={{
              delay: i * 1.2,
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ left: `${20 + i * 30}px`, bottom: "120px" }}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {[
          { name: "Fledermausflügel", icon: "🦇" },
          { name: "Spinnenbein", icon: "🕷️" },
          { name: "Nebel", icon: "🌫️" },
          { name: "Kürbis", icon: "🎃" },
          { name: "Gift", icon: "☠️" },
          { name: "Kerze", icon: "🕯️" },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => addIngredient(item.name)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl shadow-md transition"
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Ergebnis */}
      {result && (
        <motion.div
          className="mt-8 text-xl font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          ✨ Dein Trank heißt:{" "}
          <span className="text-orange-400">{result}</span>
        </motion.div>
      )}

      <p className="text-sm text-gray-400 mt-10 opacity-70">
        Mixe drei Zutaten, um deinen Halloween-Trank zu brauen!
      </p>
    </div>
  );
}
