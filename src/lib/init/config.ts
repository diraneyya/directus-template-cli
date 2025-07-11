import type {DirectusConfig, DockerConfig} from './types.js'

export const DIRECTUS_CONFIG: DirectusConfig = {
  adminEmail: 'admin@example.com',
  adminPassword: 'd1r3ctu5',
  port: 8055,
  url: 'http://localhost',
}

export const DOCKER_CONFIG: DockerConfig = {
  composeFile: 'docker-compose.yml',
  healthCheckEndpoint: '/server/info',
  interval: 3000,
  maxAttempts: 30,
}
