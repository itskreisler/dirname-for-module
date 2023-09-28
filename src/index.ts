// ## base functions
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = calculateDirname(__filename);

export { __dirname };

function calculateDirname(filePath: string): string {
  const path: string = dirname(filePath);
  const isPNPM: boolean = path.includes("pnpm");
  const isUSER: boolean = path.includes("@");

  let sliceValue: number;

  if (isPNPM) {
    sliceValue = isUSER ? -101 : -76;
  } else {
    sliceValue = isUSER ? -47 : -32;
  }

  return path.slice(0, sliceValue);
}

/*
 *
 * @param msg
 * @returns
 */
/* export function showClg(
  msg: String | Message,
) {
  console.log({ msg })
} */
// typescript
/* export type Message = "Hola mundo" | "Hello world";
export type Nullable<T> = T | null; */
