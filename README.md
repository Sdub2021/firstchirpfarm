# First Chirp Farm

Website for **First Chirp Farm** — a regenerative permaculture farm that also helps animals in need and provides education.

**Live domain:** [firstchirpfarm.com](https://firstchirpfarm.com)

## Deployed with GitHub Pages

This repository powers the website via GitHub Pages.

### How to enable GitHub Pages (one-time setup)

1. Go to the repository: https://github.com/Sdub2021/firstchirpfarm
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main` / folder: `/ (root)`
5. Click **Save**

Your site will be available at:
`https://sdub2021.github.io/firstchirpfarm/`

### Connect the custom domain firstchirpfarm.com

1. In the same **Pages** settings, under **Custom domain**, type `firstchirpfarm.com` and save.
2. GitHub will create a `CNAME` file automatically.
3. Then go to Namecheap → Domain List → Manage → **Advanced DNS**:
   - Add an **A Record**:
     - Host: `@`
     - Value: `185.199.108.153` (and the other three GitHub IPs if you want)
   - Or easier: change **Nameservers** to the ones GitHub shows, or just add a CNAME for `www`.

GitHub’s official IPs for A records:
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

### Adding the images

The images folder still needs to be uploaded (they are binary files).  
Easiest way:

1. Go to https://github.com/Sdub2021/firstchirpfarm
2. Click **Add file** → **Upload files**
3. Drag the entire `images` folder from the zip I gave you
4. Commit the changes

After that the site will show all photos correctly.

---

Built for First Chirp Farm.