interface CropPredictionData {
    nitrogen: number;
    potassium: number;
    phosphorus: number;
    temperature: number;
    pH: number;
    humidity: number;
    soil_type: string;
}

interface YieldPredictionData {
    item: string;
    average_rain_fall_mm_per_year: number;
    pesticides_tonnes: number;
    avg_temp: number;
}

interface WateringTipsData extends CropPredictionData {
    crop: string;
}