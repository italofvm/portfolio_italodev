#!/usr/bin/env node

/**
 * Script de Otimização de Imagens
 * Converte PNG para WebP e cria versões responsivas
 * 
 * Uso: node scripts/optimize-images.js
 */

import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { join, parse } from 'path'
import { existsSync } from 'fs'

const ASSETS_DIR = 'public/assets'
const OUTPUT_DIR = 'public/assets/optimized'

// Tamanhos responsivos
const SIZES = {
  mobile: 640,
  tablet: 1024,
  desktop: 1920
}

// Qualidade WebP
const WEBP_QUALITY = 85

async function optimizeImages() {
  console.log('🖼️  Iniciando otimização de imagens...\n')

  // Criar diretório de saída
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true })
  }

  // Ler todas as imagens PNG
  const files = await readdir(ASSETS_DIR)
  const pngFiles = files.filter(f => f.endsWith('.png'))

  console.log(`📁 Encontradas ${pngFiles.length} imagens PNG\n`)

  for (const file of pngFiles) {
    const inputPath = join(ASSETS_DIR, file)
    const { name } = parse(file)

    console.log(`⚙️  Processando: ${file}`)

    try {
      const image = sharp(inputPath)
      const metadata = await image.metadata()

      console.log(`   Original: ${metadata.width}x${metadata.height} (${(metadata.size / 1024 / 1024).toFixed(2)}MB)`)

      // Gerar versões responsivas em WebP
      for (const [sizeName, width] of Object.entries(SIZES)) {
        const outputPath = join(OUTPUT_DIR, `${name}-${sizeName}.webp`)
        
        await image
          .clone()
          .resize(width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputPath)

        const stats = await sharp(outputPath).metadata()
        console.log(`   ✓ ${sizeName}: ${stats.width}x${stats.height} (${(stats.size / 1024).toFixed(0)}KB)`)
      }

      // Gerar versão WebP original (fallback)
      const originalWebpPath = join(OUTPUT_DIR, `${name}.webp`)
      await image
        .clone()
        .webp({ quality: WEBP_QUALITY })
        .toFile(originalWebpPath)

      const originalStats = await sharp(originalWebpPath).metadata()
      console.log(`   ✓ original: ${originalStats.width}x${originalStats.height} (${(originalStats.size / 1024).toFixed(0)}KB)`)

      console.log(`   ✅ Concluído!\n`)

    } catch (error) {
      console.error(`   ❌ Erro ao processar ${file}:`, error.message)
    }
  }

  console.log('✨ Otimização concluída!')
  console.log(`📂 Imagens salvas em: ${OUTPUT_DIR}`)
}

optimizeImages().catch(console.error)
