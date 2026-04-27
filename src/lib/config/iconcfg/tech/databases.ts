import { asset } from "$app/paths";
import type { AppIconTemp } from "$lib/config";

//& Common Path
export const DB_ICONPATH: string = "/icons/_tech/databases";

//$ Main
export const DB_ICON: AppIconTemp = {
    key: "database",
    src: asset(`${DB_ICONPATH}/v3.4-database--3d-std-x1-195br-256p.png`),
    alt: "database-icon",
    color: "#0080FF"
}

//% Specific
export const DB_MSSQL_ICON: AppIconTemp = {
    key: "mssql",
    src: asset(`${DB_ICONPATH}/v3.4-mssql--3d-alt_dk-x1-195br-256p.png`),
    alt: "mssql-icon",
    color: "#0064CC"
}
export const DB_MYSQL_ICON: AppIconTemp = {
    key: "mysql",
    src: asset(`${DB_ICONPATH}/v3.4-mysql--3d-std-x1-195br-256p.png`),
    alt: "mysql-icon",
    color: "#016F9E"
}

export const DB_SQLITE_ICON: AppIconTemp = {
    key: "sqlite",
    src: asset(`${DB_ICONPATH}/v3.4-sqlite--3d-alt_lt-x1-195br-256p.png`),
    alt: "sqlite-icon",
    color: "#0080dc"
}


//) * DATABASE ICONSET * ------------------------------------------------------ (//
export const DB_ICONS: AppIconTemp[] = [ 
    DB_ICON,
    DB_MSSQL_ICON,
    DB_MYSQL_ICON,
    DB_SQLITE_ICON
];