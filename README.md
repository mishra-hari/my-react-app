# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Push this project to GitHub

1. Create a repository on GitHub:
   - Go to https://github.com/new
   - Enter repository name `my-react-app`
   - Choose Public or Private
   - Do not initialize with a README, `.gitignore`, or license if your local project already has files
   - Click **Create repository**

2. Set up the local repository and commit:
   ```bash
git config user.name "mishra-hari"
git config user.email "hari.mishra.in@gmail.com"
git add .
git commit -m "Initial commit"
```

3. Add the GitHub remote and push:
   ```bash
git branch -M main
git remote add origin git@github.com:mishra-hari/my-react-app.git
git push -u origin main
```

4. If you do not use SSH, change the remote to HTTPS:
   ```bash
git remote set-url origin https://github.com/mishra-hari/my-react-app.git
git push -u origin main
```

5. Verify the remote:
   ```bash
git remote -v
```

If you see `Permission denied (publickey)`, add your SSH key to GitHub or use the HTTPS remote instead.
