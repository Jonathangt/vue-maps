export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es?:  Language;
    place_name_es: string;
    text:          string;
    language?:     Language;
    place_name:    string;
    bbox?:         number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:          ID;
    wikidata:    Wikidata;
    short_code?: ShortCode;
    text_es:     Text;
    language_es: Language;
    text:        Text;
    language:    Language;
}

export enum ID {
    Country14642227724747030 = "country.14642227724747030",
    Place11457142266311050 = "place.11457142266311050",
    Region10274298724391830 = "region.10274298724391830",
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    Ec = "ec",
    EcP = "EC-P",
}

export enum Text {
    Ecuador = "Ecuador",
    ProvinciaDePichincha = "Provincia de Pichincha",
    Quito = "Quito",
}

export enum Wikidata {
    Q272586 = "Q272586",
    Q2900 = "Q2900",
    Q736 = "Q736",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    wikidata?:   Wikidata;
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
    maki?:       string;
}
