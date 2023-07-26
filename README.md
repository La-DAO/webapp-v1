# La DAO

**Conecta, Contribuye, Construye**

Bienvenido a La DAO, una comunidad de apasionados de las finanzas descentralizadas y la tecnología.

## ¡Empieza a colaborar!

#### Requisitos

- NodeJS v18.12.0 (LTS) o superior
- Git
- Sugerimos crear una cuenta en Supabase o PlanetScale, y obtener un string de conexión para tu propia Base de Datos. [Cómo obtener en Supabase](https://supabase.com/docs/guides/database/connecting-to-postgres).
- En caso de requerir acceso a las base de datos de La DAO, contáctanos a través de Discord o Telegram.

##### **Flujo de colaboración**

Utilizamos los principios de Gitflow para el control de versiones durante el flujo de trabajo como desarrolladores.

En nuestras contribuciones, debemos considerar el modelo de creación de ramas propuesto en Gitflow, donde siempre mantendremos nuestra rama principal, `main`, así como una rama para aportar nuestras contribuciones: `dev`.

Para conocer más sobre este flujo de trabajo, puedes visitar este excelente [Tutorial de Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow) creado por Atlassian.

### Configuración inicial:

Clona este repositorio

```bash
  git clone https://github.com/La-DAO/webapp-v1
```

Cambia al directorio del proyecto

```bash
  cd webapp-v1
```

Instala las dependencias

```bash
  npm install
```

_Utilizamos npm por conveniencia, ya que está isntalado por default y permite a cualquier persona colaborar sin instalar paquetería adicional como pnpm o yarn_

### Contribuciones: cambia a la rama `dev` y crea tu rama

Ejecuta el siguiente comando en la consola

```bash
  git switch dev
```

La rama dev es donde mantenemos una copia de las últimas contribuciones. Por ello, es nuestro punto de inicio para contribuir.

Si deseas crear un nuevo feature o realizarás alguna otra contribución, siguiendo el modelo de trabajo Gitflow, deberás crear tu propia rama a partir de `dev`

```bash
  git checkout -b feat/<inserta-tu-feature>
```

Seamos descriptivos pero concisos con los nombres de las ramas, algunos ejemplos:

- feat/contacto-pagina
- feat/setup-auth
- feat/api-profile-routes

Para contribuciones, crea _commits_ constantemente para que los demás podamos mantener el contexto de tus contribuciones. Recomendamos seguir estas [mejores prácticas en tus commits](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages).

Una vez que tu aportación esté lista, puedes abrir un Pull Request hacia la rama `dev` y solicita revisión de otro contribuidor.

### Variables de ambiente

Para que la aplicación funcione en su totalidad, debes crear una copia del archivo `.env.example` y nombrarlo `.env`

En este nuevo archivo `.env`, es necesario modificar las siguientes variables de estado:

`DATABASE_URL`

Al copiar `.env.example`, existe un string sin autenticación (es decir, no tiene la contraseña correcta). Esto es por diseño, para evitar abusos de la base de datos de prueba. Sigue el tutorial indicado en Requerimientos.

### Inicia la aplicación

Corre el siguiente script para iniciar el servidor de NextJS

```bash
  npm run dev
```

La aplicación iniciará en `http://localhost:3000`

### Migración Base de Datos

Corre el siguiente script aplicar las migraciones a la base de datos, y así estar sincronizado con el schema (arquitectura de la base de datos: tablas, modelos, relaciones, etc.):

```bash
  npx prisma migrate dev
```

Ahora debes poder iniciar Prisma Studio, el explorador default de Prisma para la base de datos.

```bash
  npx prisma studio
```

Iniciará la aplicación de Prisma Studio en `http://localhost:5050`. Aquí podrás interactuar la base de datos mientras desarrollas.

Cuando realices un cambio en la base de datos, deberás seguir el flujo de Prisma:

1. Modificar el schema en el archivo `/prisma/schema.prisma`
2. Crear una migración
3. Continuar trabajando en el código
4. Repetir en caso de requerir otra modificación

Puedes utilizar [esta guía](https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate) para conocer más del flujo de desarrolo de Prisma

## FAQ

#### ¿Cuál es el roadmap?

Este es un proyecto en construcción, y tenemos grandes planes para La DAO. Acércate a nuestros canales de comunicación para más información.

Actualizaremos este README conforme avancemos en el desarrollo.
