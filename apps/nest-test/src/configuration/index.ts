import {db, DBConnection} from './db'

export const configuration = [db]

export type Configuration = DBConnection
