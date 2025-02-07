// predictCrop.ts

interface SensorInput {
    npkLevel: number;
    humidity: number;
    phLevel: number;
    temperature: number;
    soilType: string;
}

export const predictCrop = (inputData: SensorInput): { crop: string; yield: string } => {
    // Simple logic to determine the best crop based on input data
    const { npkLevel, humidity, phLevel, temperature, soilType } = inputData;

    let crop: string;
    let estimatedYield: string;

    // Example logic for crop prediction
    if (npkLevel > 50 && humidity > 50 && phLevel >= 6.0 && phLevel <= 7.5 && temperature > 20) {
        crop = "Tomatoes";
        estimatedYield = "2000 kg per hectare";
    } else if (npkLevel <= 50 && humidity <= 50) {
        crop = "Corn";
        estimatedYield = "1500 kg per hectare";
    } else {
        crop = "Potatoes";
        estimatedYield = "1800 kg per hectare";
    }

    return { crop, yield: estimatedYield };
};