const fs = require('fs');
const axios = require('axios');
const path = require('path');

// Chemin vers le fichier JSON et le dossier de destination
const jsonFilePath = './tabPromo.json';
const outputDir = './images';

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Fonction pour télécharger une image
async function downloadImage(url, outputPath) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
        });
        
        // Créer un flux d'écriture vers le fichier local
        const writer = fs.createWriteStream(outputPath);
        response.data.pipe(writer);

        // Attendre la fin du téléchargement
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Erreur lors du téléchargement de l'image : ${url}`, error);
    }
}

// Fonction principale pour parcourir le JSON et télécharger les images
async function downloadAllImages() {
    try {
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        const urls = JSON.parse(data);

        for (let i = 0; i < urls.length; i++) {
            const url = urls[i];
            const fileName = path.basename(url);
            const outputPath = path.join(outputDir, fileName);

            console.log(`Téléchargement de l'image ${i + 1}/${urls.length} : ${fileName}`);
            await downloadImage(url, outputPath);
        }

        console.log('Téléchargement terminé.');
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier JSON ou du téléchargement des images', error);
    }
}

// Exécuter la fonction de téléchargement
downloadAllImages();