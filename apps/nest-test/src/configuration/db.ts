const DEFAULT_PORT = 3306

export const db = () => ({
  /**
   * 데이터베이스 이름 입니다
   * DB_DATABASE: for Build Time Env
   */
  dbDatabase: process.env.DB_DATABASE ?? 'express-test',

  /**
   * DB 인스턴스의 호스트 이름입니다
   * DB_HOST: for Build Time Env
   */
  dbHost: process.env.DB_HOST ?? '127.0.0.1',

  /**
   * 데이터베이스에 대해 구성된 암호입니다
   * DB_PASSWORD: for Build Time Env
   */
  dbPassword: process.env.DB_PASSWORD,

  /**
   * DB 인스턴스가 연결을 허용하는 포트입니다
   * DB_PORT: for Build Time Env
   */
  dbPort: process.env.DB_PORT ?? DEFAULT_PORT,
  /**
   * 마이그레이션 없이 바로 entities 와 데이터베이스 구조를 같게 만듭니다 (개발 환경에서만 참입니다)
   */
  dbSynchronize:
    process.env.DB_SYNCHRONIZE ?? process.env.NODE_ENV === 'development',

  /**
   * 데이터베이스에 대해 구성된 사용자 이름입니다
   * DB_USERNAME: for Build Time Env
   */
  dbUserName: process.env.DB_USERNAME ?? 'root',
})

export type DBConnection = ReturnType<typeof db>
