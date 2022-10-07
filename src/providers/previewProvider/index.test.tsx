import { render } from '@testing-library/react';
import { PreviewProvider } from '.';


const mockPrepareBridgeEvents = jest.fn();

jest.mock('@providers/PreviewProvider/utils', () => ({
  prepareBridgeEvents: () => mockPrepareBridgeEvents(),
}));

beforeEach(() => {
  mockPrepareBridgeEvents.mockClear();
});

describe('Preview Provider', () => {
  it('Added the script if we are in preview mode', () => {
    render(
      <PreviewProvider isPreview>
        <></>
      </PreviewProvider>
    );
    expect(mockPrepareBridgeEvents).toBeCalledTimes(1);
  });

  it('Not adds the script if we are not in preview mode', () => {
    render(
      <PreviewProvider isPreview={false}>
        <></>
      </PreviewProvider>
    );
    expect(mockPrepareBridgeEvents).toBeCalledTimes(0);
  });
});