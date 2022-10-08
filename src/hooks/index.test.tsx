import { renderHook } from '@testing-library/react';
import useStoryContent from './index';

const mockedUseStoryblok = jest.fn();
const mockIsPreview = jest.fn();
const mockUsePreviewStory = jest.fn();

jest.mock('@storyblok/react', () => ({
  __esModule: true,
  useStoryblok: (slug: string, config: object[never]) => mockedUseStoryblok(slug, config),
}));

jest.mock('../../providers/PreviewProvider', () => ({
  __esModule: true,
  useIsPreview: () => mockIsPreview(),
  usePreviewStory: () => mockUsePreviewStory(),
}));

describe('useStoryContent', () => {
  beforeEach(() => {
    mockedUseStoryblok.mockImplementation((slug, apiConfig) => {
      const content = apiConfig.version === 'draft' ? { text: 'draft content' } : { text: 'published content' };
      const first_published_at = 'published date';
      return { content, first_published_at };
    });
  });

  it('should return the published content', () => {
    mockIsPreview.mockReturnValue(false);
    const { result } = renderHook(() => useStoryContent('home')) as any;
    expect(result.current.text).toBe('published content');
    expect(result.current.first_published_at).toBe('published date');
  });

  it('should return the draft content', () => {
    mockIsPreview.mockReturnValue(true);
    const { result } = renderHook(() => useStoryContent('home')) as any;
    expect(result.current.text).toBe('draft content');
    expect(result.current.first_published_at).toBe('published date');
  });
});