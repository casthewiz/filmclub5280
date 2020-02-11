import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'reactstrap'
import Package from '../../package'
import Styles from '../../css/index.scss'

export default class extends React.Component {

  render() {
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content={this.props.metaDescription ||
            "Film club a mile high."}/>
          <meta name="keywords" content={this.props.metaKeywords || ""}/>
          <meta name="robots" content={this.props.metaRobots || "all"}/>
          <title>{this.props.title || '5280 Film Club'}</title>
          <style dangerouslySetInnerHTML={{__html: Styles}}/>
          <link rel="dns-prefetch" href="https://fonts.googleapis.com/css?family=Martel+Sans&display=swap" rel="stylesheet"/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        <MainBody navmenu={this.props.navmenu} fluid={this.props.fluid} container={this.props.container}>
          {this.props.children}
        </MainBody>
        <Container fluid={this.props.fluid}>
          <hr className="mt-3"/>
          <p className="text-muted small">
            <Link href="https://github.com/iaincollins/nextjs-starter"><a className="text-muted font-weight-bold"><span className="icon ion-logo-github"/> {Package.name} {Package.version}</a></Link>
            <span> built with </span>
            <Link href="https://github.com/zeit/next.js"><a className="text-muted font-weight-bold">Next.js {Package.dependencies.next.replace('^', '')}</a></Link>
            <span> &amp; </span>
            <Link href="https://github.com/facebook/react"><a className="text-muted font-weight-bold">React {Package.dependencies.react.replace('^', '')}</a></Link>
            <span className="ml-2">&copy; {new Date().getYear() + 1900}.</span>
          </p>
        </Container>
      </>
    )
  }
}

export class MainBody extends React.Component {
  render() {
    if (this.props.container === false) {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      )
    } else {
      return (
        <Container fluid={this.props.fluid} style={{marginTop: '1em'}}>
          {this.props.children}
        </Container>
      )
    }
  }
}
