# 🎨 Color Palette & Customization Guide

## Current Color Scheme

### Primary Colors

| Color | Hex | Tailwind Class | Usage |
|-------|-----|--------|-------|
| **Blue** | #2563EB | `bg-blue-600` `text-blue-600` | Headers, buttons, accents |
| **Orange** | #F97316 | `bg-orange-500` `text-orange-500` | Product titles, highlights |
| **Green** | #22C55E | `bg-green-500` `text-green-500` | WhatsApp button |
| **White** | #FFFFFF | `bg-white` `text-white` | Backgrounds, text |
| **Gray** | #1F2937 | `text-gray-800` | Body text |

---

## Tailwind Color Palette Reference

### Available Colors in Tailwind

```
Red, Pink, Rose, Orange, Amber, Yellow, Lime, Green, Emerald, 
Teal, Cyan, Sky, Blue, Indigo, Violet, Purple, Fuchsia
```

### Shade Levels
```
50, 100, 200, 300, 400, 500, 600, 700, 800, 900
```

### Example: Changing Blue to Green
```html
<!-- BEFORE (Blue) -->
<div class="bg-blue-600 text-white">Button</div>

<!-- AFTER (Green) -->
<div class="bg-green-600 text-white">Button</div>

<!-- AFTER (Purple) -->
<div class="bg-purple-600 text-white">Button</div>
```

---

## How to Change Colors Site-Wide

### Step 1: Identify What to Change
The website uses:
- **Blue-600** for primary elements (navbar, buttons, links)
- **Orange-500** for accents (product titles, highlights)
- **Green-500** for WhatsApp

### Step 2: Use Find & Replace
Open your HTML files and use Find & Replace (Ctrl+H):

```
Find:    bg-blue-600
Replace: bg-[your-color]-600

Find:    text-blue-600
Replace: text-[your-color]-600

Find:    text-orange-500
Replace: text-[your-color]-500
```

### Step 3: Test the Changes
Open the website in browser and check if colors look good.

---

## Color Combination Ideas

### Professional Blue Theme (Current)
```
Primary:  blue-600  (#2563EB)
Accent:   orange-500 (#F97316)
Success:  green-500 (#22C55E)
```

### Green Medical Theme
```
Primary:  green-600  (#16A34A)
Accent:   blue-500   (#3B82F6)
Success:  teal-500   (#14B8A6)
```

### Purple Professional Theme
```
Primary:  purple-600  (#7C3AED)
Accent:   amber-500   (#F59E0B)
Success:  green-500   (#22C55E)
```

### Red Healthcare Theme
```
Primary:  red-600    (#DC2626)
Accent:   blue-500   (#3B82F6)
Success:  green-500  (#22C55E)
```

### Indigo Modern Theme
```
Primary:  indigo-600  (#4F46E5)
Accent:   pink-500    (#EC4899)
Success:  green-500   (#22C55E)
```

---

## Find All Color References

### In Every HTML File:

#### Blue Colors
```html
class="bg-blue-600"        Top bar background
class="text-blue-600"      Links, accents
class="hover:bg-blue-700"  Button hover
```

#### Orange Colors
```html
class="text-orange-500"    Product titles
class="border-orange-500"  Button borders
```

#### Green Colors
```html
class="bg-green-500"       WhatsApp button
class="text-green-500"     Check marks
```

#### Gray Colors
```html
class="text-gray-700"      Main text
class="text-gray-600"      Secondary text
class="bg-gray-50"         Light backgrounds
```

---

## Complete List of Changes Needed

### For Primary Color Change (Blue → Your Color):

1. **Top Bar** (`all pages`)
   ```html
   <div class="bg-blue-600 text-white">
   ```

2. **Navbar Hover** (`all pages`)
   ```html
   <a href="#" class="hover:text-blue-600">
   ```

3. **Buttons** (`all pages`)
   ```html
   <a href="#" class="bg-blue-600 hover:bg-blue-700">
   ```

4. **Links** (`all pages`)
   ```html
   <a href="#" class="text-blue-600">
   ```

5. **CTA Section** (`index.html`)
   ```html
   <section class="bg-gradient-to-r from-blue-600 to-blue-700">
   ```

6. **Icons** (`all pages`)
   ```html
   <i class="text-blue-400">
   ```

### For Accent Color Change (Orange → Your Color):

1. **Product Titles** (`product.html`, `category.html`)
   ```html
   <h3 class="text-orange-500">
   ```

2. **Buttons** (`product.html`)
   ```html
   <a href="#" class="text-orange-500 border-orange-500">
   ```

3. **Check Marks** (`index.html`, `about.html`)
   ```html
   <span class="text-green-500">✓</span>
   ```

---

## Customization Examples

### Example 1: Change to Green Theme
```html
<!-- Original -->
<div class="bg-blue-600">Header</div>

<!-- New -->
<div class="bg-green-600">Header</div>
```

### Example 2: Make Buttons Rounded
```html
<!-- Original -->
<a href="#" class="bg-blue-600 px-8 py-3 rounded-lg">

<!-- More rounded -->
<a href="#" class="bg-blue-600 px-8 py-3 rounded-full">
```

### Example 3: Change Text Color
```html
<!-- Original -->
<h1 class="text-gray-800">

<!-- Darker -->
<h1 class="text-gray-900">

<!-- Lighter -->
<h1 class="text-gray-700">
```

### Example 4: Add Shadow
```html
<!-- Original -->
<div class="bg-white p-4">

<!-- With shadow -->
<div class="bg-white p-4 shadow-lg">

<!-- With more shadow -->
<div class="bg-white p-4 shadow-2xl">
```

---

## Tailwind Color Names & Codes

### Blue Shades
```
blue-50:   #EFF6FF
blue-100:  #DBEAFE
blue-200:  #BFDBFE
blue-300:  #93C5FD
blue-400:  #60A5FA
blue-500:  #3B82F6
blue-600:  #2563EB  ← Currently used
blue-700:  #1D4ED8
blue-800:  #1E40AF
blue-900:  #1E3A8A
```

### Orange Shades
```
orange-50:   #FFF7ED
orange-100:  #FFEDD5
orange-200:  #FED7AA
orange-300:  #FDBA74
orange-400:  #FB923C
orange-500:  #F97316  ← Currently used
orange-600:  #EA580C
orange-700:  #C2410C
orange-800:  #9A3412
orange-900:  #7C2D12
```

### Green Shades
```
green-50:   #F0FDF4
green-100:  #DCFCE7
green-200:  #BBF7D0
green-300:  #86EFAC
green-400:  #4ADE80
green-500:  #22C55E  ← Currently used
green-600:  #16A34A
green-700:  #15803D
green-800:  #166534
green-900:  #145231
```

---

## Dark Mode Customization

### Add Dark Mode Support
```html
<!-- Add to top of HTML head -->
<script>
  // Force light mode (or remove this for dark mode support)
  document.documentElement.classList.remove('dark')
</script>
```

### Use Dark Mode Classes
```html
<!-- Light on light, dark on dark -->
<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-800 dark:text-white">Title</h1>
</div>
```

---

## Color Psychology for Healthcare

### Recommended Colors for Medical Websites

| Color | Psychology | Use Case |
|-------|-----------|----------|
| **Blue** | Trust, Calm, Professional | Primary color ✓ |
| **Green** | Health, Growth, Wellness | Buttons, Success |
| **Red** | Urgent, Important, Alert | Warnings |
| **Orange** | Energy, Warmth, Activity | Highlights ✓ |
| **Purple** | Trust, Wisdom | Premium features |
| **Gray** | Stability, Neutral | Text, backgrounds ✓ |

Current color scheme: **Perfect for Healthcare!**

---

## Font & Typography Customization

### Current Font
```html
class="font-serif"  <!-- Times New Roman -->
```

### Change to Sans-Serif
```html
<!-- Add to head -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Use in HTML -->
<body style="font-family: 'Inter', sans-serif;">
```

### Popular Font Combinations
```
1. Serif + Clean: Times New Roman + Arial
2. Modern: Poppins + Inter
3. Professional: Roboto + Open Sans
4. Elegant: Playfair Display + Lato
5. Tech: IBM Plex Mono + IBM Plex Sans
```

---

## Spacing Customization

### Current Spacing
```
Section padding:    py-16 md:py-24  (64px-96px)
Card padding:       p-6 to p-8      (24px-32px)
Gap between items:  gap-6 to gap-8  (24px-32px)
```

### Make More Compact
```html
<!-- Original (spacious) -->
<section class="py-16 md:py-24">

<!-- Compact -->
<section class="py-8 md:py-12">
```

### Make More Spread Out
```html
<!-- Original (spacious) -->
<section class="py-16 md:py-24">

<!-- Very spacious -->
<section class="py-24 md:py-32">
```

---

## Quick Customization Checklist

- [ ] Choose your primary color (currently blue)
- [ ] Choose your accent color (currently orange)
- [ ] Choose your success color (currently green)
- [ ] Find all instances using Find & Replace
- [ ] Test colors in browser
- [ ] Test on light and dark backgrounds
- [ ] Check readability (contrast)
- [ ] Save customized files

---

## Testing Your Colors

### Contrast Checker
Use WebAIM Contrast Checker:
https://webaim.org/resources/contrastchecker/

### Color Harmony Tool
Use ColorHunt or Coolors:
- https://colorhunt.co
- https://coolors.co

### Preview Changes
1. Open HTML in browser
2. Open DevTools (F12)
3. Edit color in Inspector
4. See changes in real-time
5. Copy working color code
6. Update in HTML file

---

## Common Color Combinations

### Medical/Healthcare
- Blue (#2563EB) + Green (#22C55E) + Orange (#F97316)

### Modern/Startup
- Purple (#7C3AED) + Pink (#EC4899) + Indigo (#4F46E5)

### Professional/Corporate
- Navy (#1E3A8A) + Teal (#14B8A6) + Gray (#4B5563)

### Warm/Friendly
- Orange (#F97316) + Yellow (#FBBF24) + Red (#DC2626)

### Cool/Tech
- Cyan (#06B6D4) + Blue (#3B82F6) + Purple (#8B5CF6)

---

**Your website is color-customization ready! 🎨**

*Pick your colors and make it your own!*
