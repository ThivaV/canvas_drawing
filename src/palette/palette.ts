import { UserInputConfig } from "../model/user_input";

export function createPalette(input: UserInputConfig) {
    if (input.height || input.width) {
        return;
    }

    // Added +2 for border markings
    const paletteWidth = input.width + 2;   // X-Axis
    const paletteHeight = input.height + 2; // Y-Axis
    
    // const palette = [paletteWidth][paletteHeight];
    const palette = [];


}
