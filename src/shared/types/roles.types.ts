import { NextPage } from 'next';

export type RolesType = {
  isOnlyUser?: boolean;
  isOnlyAdmin?: boolean;
};

export type NextPageAuth<T = {}> = NextPage<T> & RolesType;

export type ComponentRolesType = { Component: RolesType };
