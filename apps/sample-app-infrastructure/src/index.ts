import { local } from "@pulumi/command";
import { Hello } from "@repro/constants";

const random = new local.Command("random", {
    // create: `echo "${Hello}"`
    create: `echo "this works"`
});

export const output = random.stdout;