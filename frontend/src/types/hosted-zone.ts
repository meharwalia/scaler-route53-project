export type Tag = {
    key : string;
    value : string;
}

export type HostedZone = {
    id : string;
    domain_name : string;
    description : string | null;
    type : "public" | "private";
    account : number;
    created_at : string;
    created_by : number;
    updated_at : string;
    updated_by : number
    tags : string | null;
}