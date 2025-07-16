# Expo React Native App

Esta é uma aplicação móvel criada com Expo e React Native usando TypeScript.

## Características

- **React Native com TypeScript**: Desenvolvimento type-safe
- **Expo SDK**: Ferramentas e APIs nativas simplificadas
- **Error Boundary**: Tratamento de erros robusto
- **UI Moderna**: Interface limpa e moderna com SafeAreaView
- **Componentes Reutilizáveis**: Arquitetura modular

## Estrutura do Projeto

```
mobile/
├── App.tsx                 # Componente principal da aplicação
├── components/
│   └── ErrorBoundary.tsx   # Componente para tratamento de erros
├── screens/
│   └── HomeScreen.tsx      # Tela principal de boas-vindas
├── assets/                 # Imagens e recursos
└── package.json           # Dependências e scripts
```

## Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI (opcional, mas recomendado)

### Instalação

1. Navegue até o diretório do projeto móvel:
```bash
cd mobile
```

2. Instale as dependências:
```bash
npm install
```

### Executando a Aplicação

1. **Iniciar o servidor de desenvolvimento:**
```bash
npm start
```

2. **Executar no Android:**
```bash
npm run android
```

3. **Executar no iOS (apenas macOS):**
```bash
npm run ios
```

4. **Executar no navegador web:**
```bash
npm run web
```

### Usando o Expo Go

1. Instale o aplicativo Expo Go no seu dispositivo móvel
2. Execute `npm start` no terminal
3. Escaneie o QR code que aparece no terminal ou no navegador
4. A aplicação será carregada no seu dispositivo

## Funcionalidades Implementadas

- ✅ Tela de boas-vindas moderna
- ✅ Tratamento de erros com ErrorBoundary
- ✅ SafeAreaView para compatibilidade com diferentes dispositivos
- ✅ Botão interativo com feedback visual
- ✅ Design responsivo e acessível

## Próximos Passos

- Adicionar navegação entre telas (React Navigation)
- Implementar gerenciamento de estado (Context API ou Redux)
- Integrar APIs externas
- Adicionar testes unitários
- Configurar CI/CD

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento móvel
- **Expo**: Plataforma para desenvolvimento React Native
- **TypeScript**: Superset do JavaScript com tipagem estática
- **React**: Biblioteca para construção de interfaces

## Suporte

Para mais informações sobre Expo e React Native:
- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do React Native](https://reactnative.dev/)
