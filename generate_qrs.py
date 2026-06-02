import os
import subprocess
import sys

# Ensure required libraries are installed
try:
    import qrcode
except ImportError:
    print("Installing qrcode library...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "qrcode", "pillow"])
    import qrcode

# The target domain
DOMAIN = "https://chirine.dev.codexcape.solutions"

# All route paths
PATHS = [
    "AlifetoLive",
    "ALifetoPaint",
    "Miles",
    "judy",
    "Gwen",
    "Coraline",
    "Chirine",
    "Aun",
    "TwoYears",
    "TwentyFive"
]

# Output folder
OUTPUT_FOLDER = "qr_codes"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

print(f"Generating QR codes in folder: '{OUTPUT_FOLDER}/'...")

for path in PATHS:
    url = f"{DOMAIN}/{path}"
    print(f"Creating QR for -> {url}")
    
    # Configure QR code details
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    # Paint it pink! (Black looks basic, pink matches our aesthetic, but black is safest for scanning. Let's stick to black/white for maximum scan reliability on a screen zoom-in)
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Save the QR code image
    filename = f"{path}.png"
    filepath = os.path.join(OUTPUT_FOLDER, filename)
    img.save(filepath)

print("\nSuccess! All QR codes generated successfully!")
print(f"You can find them in: {os.path.abspath(OUTPUT_FOLDER)}")
