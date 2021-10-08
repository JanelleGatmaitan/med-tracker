set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."users" (
  "userId"        serial,
  "username"         text    not null,
  "hashedPassword"   text    not null,
  primary key ("userId"),
  unique ("username")
);

create table "public"."medications" (
  "medicationName" text not null,
  "dose" text not null,
  "frequency" text[] not null,
  "userId" integer not null,
  foreign key ("userId")
    references "users"("userId")
);
