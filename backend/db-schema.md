Create table hostedZones(
    id , PK uuid
    domainName ,
    description ,
    type ,
    accountId , // foreign key accounts table
    createdAt ,
    createdBy , // foreign key user table
    updatedAt timestamp,
    updatedBy ,// foreign key user table
    tags array
)

<!-- Create table tags(
    id , PK auto increment
    userId , // Foreign Key user table
    zoneId , // Foreign Key hosted zones table
    key ,
    value
) -->

Create table dnsRecords(
    id , PK auto increment
    recordName , // validate domain name
    recordType , // out of allowed values
    value ,
    ttl ,
    routingPolicy , // out of allowed values
    zoneId //Foreign Key from hosted zones table
    createdAt,
    createdBy,
    updatedAt,
    updatedBy
)