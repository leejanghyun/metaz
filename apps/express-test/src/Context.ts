import {Router} from 'express-serve-static-core'

export type ContextRoute<Props> = (context: Props) => Router
