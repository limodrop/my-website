#!/usr/bin/env node

/**
 * Test script to verify serverClient data loading
 * 
 * This script tests that:
 * - Data files are properly formatted
 * - serverClient can load all data types
 * - All expected fields are present
 */

import { serverClient } from "../app/lib/serverClient"

async function runTests() {
  console.log("🧪 Testing serverClient data loading...\n")

  let passed = 0
  let failed = 0

  try {
    // Test regions
    console.log("Testing regions data...")
    const regions = serverClient.regions()
    console.log(`✅ Loaded ${regions.length} regions`)
    
    if (regions.length > 0) {
      const region = regions[0]
      const requiredFields = ["slug", "headline", "subheadline", "seoDescription"]
      const hasAllFields = requiredFields.every(field => field in region)
      
      if (hasAllFields) {
        console.log(`✅ Region structure validated`)
        passed++
      } else {
        console.log(`❌ Region missing required fields`)
        failed++
      }
    }

    // Test region lookup
    const usRegion = serverClient.region("united-states")
    if (usRegion && usRegion.slug === "united-states") {
      console.log(`✅ Region lookup works`)
      passed++
    } else {
      console.log(`❌ Region lookup failed`)
      failed++
    }

    console.log()

    // Test countries
    console.log("Testing countries data...")
    const countries = serverClient.countries()
    console.log(`✅ Loaded ${countries.length} countries`)
    
    if (countries.length > 0) {
      const country = countries[0]
      const requiredFields = ["slug", "name", "tagline", "seoDescription", "primaryAirports"]
      const hasAllFields = requiredFields.every(field => field in country)
      
      if (hasAllFields) {
        console.log(`✅ Country structure validated`)
        passed++
      } else {
        console.log(`❌ Country missing required fields`)
        failed++
      }
    }

    // Test country lookup
    const usCountry = serverClient.country("united-states")
    if (usCountry && usCountry.name === "United States") {
      console.log(`✅ Country lookup works`)
      passed++
    } else {
      console.log(`❌ Country lookup failed`)
      failed++
    }

    console.log()

    // Test cities
    console.log("Testing cities data...")
    const cities = serverClient.cities()
    console.log(`✅ Loaded ${cities.length} cities`)
    
    if (cities.length > 0) {
      const city = cities[0]
      const requiredFields = ["slug", "name", "country", "tagline", "seoDescription", "primaryUseCases"]
      const hasAllFields = requiredFields.every(field => field in city)
      
      if (hasAllFields) {
        console.log(`✅ City structure validated`)
        passed++
      } else {
        console.log(`❌ City missing required fields`)
        failed++
      }
    }

    // Test city lookup
    const portland = serverClient.city("portland")
    if (portland && portland.name === "Portland") {
      console.log(`✅ City lookup works`)
      passed++
    } else {
      console.log(`❌ City lookup failed`)
      failed++
    }

    // Test cities by country - check that we get results and they're all from US
    const usCities = serverClient.citiesByCountry("United States")
    if (usCities.length > 0 && usCities.every(c => c.country === "United States")) {
      console.log(`✅ Cities by country works (${usCities.length} US cities)`)
      passed++
    } else {
      console.log(`❌ Cities by country failed`)
      failed++
    }

    console.log()

    // Test homepage
    console.log("Testing homepage data...")
    const homepage = await serverClient.homepage()
    if (homepage.heroSlides && homepage.featuredServices && homepage.featuredCities && homepage.featuredFleet) {
      console.log(`✅ Homepage data structure valid`)
      passed++
    } else {
      console.log(`❌ Homepage data structure invalid`)
      failed++
    }

    // Summary
    console.log(`\n${"=".repeat(50)}`)
    console.log(`✅ Passed: ${passed}`)
    console.log(`❌ Failed: ${failed}`)
    console.log(`${"=".repeat(50)}`)

    if (failed === 0) {
      console.log("\n🎉 All tests passed!")
      process.exit(0)
    } else {
      console.log("\n⚠️  Some tests failed")
      process.exit(1)
    }

  } catch (error) {
    console.error("\n❌ Error during testing:", error)
    process.exit(1)
  }
}

runTests()
