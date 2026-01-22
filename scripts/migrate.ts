import fs from "fs"
import path from "path"

/**
 * Migration Script for Backend Data Layer
 * 
 * This script handles migration of region, country, and city data
 * from source JSON files to the backend data directory.
 * 
 * Usage:
 *   - Place source JSON files (regions.json, countries.json, cities.json) in project root
 *   - Run: npx tsx scripts/migrate.ts
 *   - Data will be copied to ./data/ directory
 */

function migrate() {
  console.log("🚀 Starting data migration...\n")

  const sourceDir = process.cwd()
  const targetDir = path.join(process.cwd(), "data")

  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    console.log("📁 Creating data directory...")
    fs.mkdirSync(targetDir, { recursive: true })
  }

  const files = ["regions.json", "countries.json", "cities.json"]
  let migratedCount = 0

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file)
    const targetPath = path.join(targetDir, file)

    try {
      // Check if source file exists
      if (fs.existsSync(sourcePath)) {
        // Read, parse, and validate JSON
        const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"))

        // Write to target with pretty formatting
        fs.writeFileSync(targetPath, JSON.stringify(data, null, 2))

        console.log(`✅ Migrated ${file} (${data.length} records)`)
        migratedCount++
      } else {
        console.log(`⚠️  Skipped ${file} (file not found in root)`)
      }
    } catch (error) {
      console.error(`❌ Error migrating ${file}:`, error)
    }
  }

  console.log(`\n🎉 Migration complete! ${migratedCount}/${files.length} files migrated.`)
  console.log(`📂 Data location: ${targetDir}`)
}

migrate()
