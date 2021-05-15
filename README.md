# angular-di-all-faces

## Table of contents

- [General info](#general-information)
- [Technologies](#technologies)
- [Setup](#setup)
- [ProvideIn](#provideIn)

## General information

This project was created to look at how DI works.

Especially:

- Types of providers
- Scope of provide with lazy and eager loading modules
- Tree-shakable - optimization the bundle
- Injectors,
- Providers,
- Tokens,
- Factory

Each chapter will consist of the following elements:

- localization (in repository),
- how to use
- use cases
- pros and cons
- article, docs, other sources

## Technologies

- Angular v.11

## Setup

1. Clone this repo
2. Checkout to the [branch](#list-of-branches) containing the information searched for
3. npm i
4. ng serve

### List of branches:

```
// ProvideIn
git checkout basic-provide-in

```

## ProvideIn

- [Localization](#Localization-[ProvideIn])
- [How to use](#how-to-use-[ProvideIn])
- [Articles](#articles-[ProvideIn])

Hierarchy:

platform,
root,
any,
null | Type<any>

When we used empty decorator @Injectable(), we have to add service to providers in @NgModule or @Component decorators, otherwise we get Error: NullInjectorError

### Localization [ProvideIn]

```
git checkout basic-provide-in
```

### How to use [ProvideIn]

providedIn?: Type<any> | 'root' | 'platform' | 'any' | null

```
@Injectable({
  providedIn: 'platform',
})
```

- scope: everywhere even between applications using Angular Elements

```
@Injectable({
  providedIn: 'root',
})
```

- scope: everywhere in the application
- tree-shakable: true &#128077;

```
@Injectable({
  providedIn: 'any',
})
```

- scope: everywhere in the application, but
  - same instance between eager load module
  - different instance between lazy load module
- tree-shakable: true &#128077;

```
@Injectable()
export class ContinentService {}

@NgModule({
  ...
  providers: [ContinentService],
})

```

- scope: in the module in which is provided
- tree-shakable: false &#128078;

```
@Injectable()
export class CountryService {}

@Component({
  ...
  providers: [CountryService],
})
```

- scope: in the component in which it is provided
- tree-shakable: false &#128078;

### Articles [ProvideIn]

#### short explanation

-> https://stackoverflow.com/questions/59892369/what-is-the-difference-between-providedin-any-and-root

#### docs

-> https://angular.io/api/core/Injectable

#### articles ->

https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb
https://betterprogramming.pub/the-3-types-of-dependency-injection-141b40d2cebc,
https://www.angular.love/2020/12/21/angular-tree-shaking/
