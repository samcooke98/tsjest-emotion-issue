
import * as React from 'react';

import { create} from 'react-test-renderer'
import { createSerializer } from 'jest-emotion'
import * as emotion from 'emotion'

expect.addSnapshotSerializer(createSerializer(emotion))

import Component from './Component';

describe("A basic test", () => { 
    it("Should match the snapshot", () => { 
        expect(create(<Component/>)).toMatchSnapshot())
    })
})