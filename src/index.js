'use strict'

import isoDep from 'iso-dep'

const main = async () => {
  document.body.innerHTML = `
  iso: ${isoDep()}
  `
}

main()
