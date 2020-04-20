export type Categorie = "CS" | "CF" | "CA"

export type CategorieClassement = "P" | "B" | "M" | "C" | "J" | "S1" | "S2" | "S3"

export type Arme = "droit" | "chasse" | "classique" | "poulies"

export type Diplome = "entraîneur"

export type Secteur = "Alsace" | "Champagne-Ardenne" | "Lorraine"

export interface Prix {
  nom: string | null
  hebergement: string | null
  restauration: string | null
  total: number
}

export interface DateSession {
  dateDebut: string
  dateFin: string | null
  horaires: string | null
  contenu: string | null
  shop: string | null
}

export interface Session {
  secteur: Secteur
  lieu: string[]
  remarque: string | null
  dates: DateSession[] | null
  shop: string | null
}

export interface FormationAbstract {
  titre: string
  url: string
  categorie: Categorie
  reference: string
  date: string
  categories: CategorieClassement[] | null
  armes: Arme[] | null
  diplome: string[] | null
  tags: string[]
  age: string | null
}

export interface Formation extends FormationAbstract {
  maximum: number | null
  description: string
  objectifs: string | null
  contenu: string | null
  prerequis: string | null
  particularites: string | null
  duree: string
  programmation: string | null
  prix: Prix[]
  sessions: Session[]
  examen: string | null
  // scores: { [nom: string]: number }[] | null
  complements: string[]
  shop: string | null
}
