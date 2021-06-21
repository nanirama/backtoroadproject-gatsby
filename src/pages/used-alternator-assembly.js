import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from "styled-components"
import SelectControls from '../components/SelectControls'
import PartsGallery from '../components/PartsGallery'

const UsedAlternatorAssembly = () => (
    <Layout>
        <SEO title="Used Alternator Assembly"/>
        <div>
            Used-Alternator-Assembly
        </div>
        <EngineContainer>
            <SelectControls />
            <PartsGallery />
        </EngineContainer>
    
    </Layout>
)

export default UsedAlternatorAssembly


const EngineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  justify-items: center;
  padding: 2rem 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`