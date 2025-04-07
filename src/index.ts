/**
 * COTALKER CLIENT LIBRARY
 * TypeScript client library for Cotalker API
 */

// Import core exports
import 'module-alias/register'

// Export main client components
export { CotalkerAPI } from './core/libs/CotalkerAPI'
export { default as COTFilesAPI } from './core/libs/COTFilesAPI'

// Re-export types as needed
// Note: Type exports should be enabled in tsconfig.json
