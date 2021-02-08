export interface IChartOptions {
    chartArea?: { [key: string]: string };
    colors?: string[];
    legend?: {
        position?: string;
        maxLines?: number;
        textStyle?: {
            color?: string;
        };
    };
    backgroundColor?: string;
    hAxis?: {
        textStyle?: {
            color?: string;
        };
    };
    vAxis?: {
        textStyle?: {
            color?: string;
        };
    };
    titleTextStyle?: {
        color?: string;
    };
}
